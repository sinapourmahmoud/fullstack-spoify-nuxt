import { Options } from "types";

export default () => {
  let useOptions = useState<Options[]>("useOptions", () => []);
  let client = useSupabaseClient();
  const getArtists = async () => {
    let { data: artists, error } = await client
      .from("artists")
      .select("name,id,songs");
    useOptions.value = artists?.map(
      (artist: { name: string; id: string; songs: string[] }) => ({
        id: artist.id,
        label: artist.name,
        value: artist.id,
        songs: artist.songs,
      })
    ) as Options[];
  };
  return {
    getArtists,
    useOptions,
  };
};
