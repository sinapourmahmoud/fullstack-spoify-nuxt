export type Options = {
  label: string;
  id: string;
  value: string;
  songs: string[];
  image_path: string;
};

export type Artist = {
  created_at: string;
  id: string;
  image_path: string;
  name: string;
  songs: string[];
};

export type Song = {
  created_at: string;
  id: string;
  singer_id: string;
  storage_path: string;
  title: string;
  user_id: string;
  artists: Artist;
  songUrl?: string;
};

export type Favorites = {
  created_at: string;
  id: string;
  user_id: string;
  song_id: string;
};

// export type PlayListSong = Song & {
//   songUrl:string
// };
