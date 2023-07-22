export default () => {
  let useUser = useState<null | string>("user", () => null);
  const user = useSupabaseUser();
  const client = useSupabaseAuthClient();
  const loginGoogle = async () => {
    let { data, error } = await client.auth.signInWithOAuth({
      provider: "google",
    });
    console.log(data);
  };

  return {
    loginGoogle,
    useUser,
  };
};
