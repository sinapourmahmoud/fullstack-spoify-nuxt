import { Options, Song } from "types";

export default () => {
  let useOptions = useState<Options[]>("useOptions", () => []);
  let useSongs = useState<Song[]>("useSongs", () => []);
  let client = useSupabaseClient();

  const getSongs = async () => {
    let { data: songs, error } = await client.from("songs").select(`
    *,
    artists(
      *
    )
    `);
    useSongs.value = songs;
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

  return {
    getArtists,
    getUrl,
    useOptions,
    useSongs,
    getSongs,
  };
};
