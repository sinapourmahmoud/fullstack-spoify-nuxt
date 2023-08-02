import uniqid from "uniqid";

import { Favorites, Options } from "types";

export default () => {
  let client = useSupabaseAuthClient();
  let { useUser } = useAuth();
  let { useOptions, useFavorites } = useGet();
  const submitSong = async ({
    image,
    audio,
    artistImage,
    artist,
    artistSelect,
    name,
  }: {
    image: any;
    audio: any;
    artistImage: any;
    artist: string | undefined;
    artistSelect: string | undefined;
    name: string;
  }) => {
    try {
      if (!artistSelect) {
        let { id: artistId } = await addArtist(artist as string, artistImage);
        await addSong(name, artistId, image, audio);
      } else {
        await addSong(name, artistSelect, image, audio);
      }
    } catch (err: any) {
      console.log("first", err.message);
    }
  };

  const addSong = async (
    title: string,
    singer_id: string,
    image: any,
    audio: any
  ) => {
    let uniqID = uniqid();
    try {
      const { data: song, error: songError } = await client
        .from("songs")
        .insert({
          user_id: useUser?.value?.id,
          title,
          singer_id,
          storage_path: uniqID,
        })
        .select();

      await uploadFile("songs", uniqID, audio);
      await uploadFile("images", uniqID, image);

      await updateArtist(
        song?.[0]?.id as string,
        song?.[0]?.singer_id as string
      );
    } catch (err: any) {
      console.log("second", err.message);
    }
  };

  const addArtist = async (name: string, artistImage: any) => {
    let uniqID = uniqid();
    try {
      const { data, error } = await client
        .from("artists")
        .insert({
          name,
          songs: [],
          image_path: uniqID,
        })
        .select();
      await uploadFile("profiles", uniqID, artistImage);

      return data?.[0];
    } catch (err: any) {
      console.log("third", err.message);
    }
  };

  const updateArtist = async (songId: string, artistId: string) => {
    try {
      let findOption = useOptions.value.filter((item: Options) => true);
      findOption?.songs?.push(songId);
      let songsList = findOption?.songs ? findOption?.songs : [];
      let { data, error } = await client
        .from("artists")
        .update({ songs: [songId, ...songsList] })
        .eq("id", artistId);
    } catch (err: any) {
      console.log("forth", err.message);
    }
  };

  const uploadFile = async (provider: string, uniqID: string, file: any) => {
    try {
      const { data, error } = await client.storage
        .from(provider)
        .upload(`public/${uniqID}`, file, {
          cacheControl: "3600",
          upsert: false,
        });
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const addFavorites = async (id: string) => {
    let findFavorite = useFavorites.value?.some(
      (item: Favorites) => item?.song_id === id
    );
    if (findFavorite) {
      const { data, error } = await client
        .from("favorites")
        .delete()
        .eq("song_id", id);
    } else {
      const { data, error } = await client
        .from("favorites")
        .insert([{ song_id: id, user_id: useUser.value?.id }])
        .select();
    }
  };

  return { submitSong, addFavorites };
};
