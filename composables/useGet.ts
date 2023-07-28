import { Favorites, Options, Song } from "types";

export default () => {
  let { useUser } = useAuth();

  let useOptions = useState<Options[]>("useOptions", () => []);
  let useSongs = useState<Song[]>("useSongs", () => []);
  let useFavorites = useState<Favorites[]>("useFavorites", () => []);
  let client = useSupabaseClient();

  const getSongs = async () => {
    let { data: songs, error } = await client.from("songs").select(`
    *,
    artists(
      *
    )
    `);
    useSongs.value = songs as Song[];
  };

  const getArtists = async () => {
    let { data: artists, error } = await client
      .from("artists")
      .select("name,id,songs,image_path");
    useOptions.value = artists?.map(
      (artist: {
        name: string;
        id: string;
        songs: string[];
        image_path: string;
      }) => ({
        id: artist.id,
        label: artist.name,
        value: artist.id,
        songs: artist.songs,
        image_path: artist.image_path,
      })
    ) as Options[];
  };

  const getUrl = (id: string, files: string) => {
    let { data } = client.storage.from(files).getPublicUrl(`public/${id}`);

    return data.publicUrl;
  };

  const getFavorites = async () => {
    let { data, error } = await client
      .from("favorites")
      .select("*")
      .eq("user_id", useUser?.value?.id);
    console.log("favorites", data);
    useFavorites.value = data as Favorites[];
  };

  return {
    getArtists,
    useFavorites,
    getFavorites,
    getUrl,
    useOptions,
    useSongs,
    getSongs,
  };
};
