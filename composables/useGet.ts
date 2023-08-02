import { Favorites, Options, Song } from "types";

export default () => {
  let { useUser } = useAuth();

  let useOptions = useState<Options[]>("useOptions", () => []);
  let useSongs = useState<Song[]>("useSongs", () => []);
  let useSearchResault = useState<Song[]>("useSearchResault", () => []);
  let useFavorites = useState<Favorites[]>("useFavorites", () => []);
  let useSingers = useState<Options[]>("useSingers", () => []);
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
      .select(
        `*,
      songs(
        *,
        artists(
          *
        )
      )
      `
      )
      .eq("user_id", useUser?.value?.id);
    useFavorites.value = (data as Favorites[]) || [];
  };
  const onSubscribeFavorites = () => {
    const favorites = client
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "favorites" },
        (payload) => {
          if (payload?.old) {
            useFavorites.value = useFavorites.value?.filter(
              (item: Favorites) => item.id !== payload.old?.id
            );
          } else {
            useFavorites.value = [
              ...useFavorites.value,
              { ...(payload.new as Favorites) },
            ];
          }
        }
      )
      .subscribe();
  };

  const getSearchResault = async (title?: string) => {
    if (title) {
      let { data: songs, error } = await client
        .from("songs")
        .select(
          `
    *,
    artists(
      *
    )
    `
        )
        .textSearch("title", title);
      useSearchResault.value = songs as Song[];
    } else {
      let { data: songs, error } = await client.from("songs").select(`
    *,
    artists(
      *
    )
    `);
      useSearchResault.value = songs as Song[];
    }
  };

  const getSingers = async () => {
    let { data: artists, error } = await client
      .from("artists")
      .select("name,id,songs,image_path");
    console.log("dataaaaaaaaaaaaa", artists);
    useSingers.value = artists as Options[];
    return artists;
  };

  return {
    onSubscribeFavorites,
    useSingers,
    getSingers,
    useSearchResault,
    getSearchResault,
    getArtists,
    useFavorites,
    getFavorites,
    getUrl,
    useOptions,
    useSongs,
    getSongs,
  };
};
