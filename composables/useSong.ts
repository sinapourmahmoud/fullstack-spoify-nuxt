//this file is for playing and pausing,etc the song

import { Song } from "types";

export default () => {
  let playList = useState<Song[]>("playList", () => []);
  let activeSong = useState<null | Song>("activeSong", () => null);
  let isPlaying = useState<boolean>("isPlaying", () => false);
  let volume = useState<number>("volume", () => 1);
  const selectSong = (songsList: Song[], item: Song) => {
    isPlaying.value = false;

    playList.value = songsList;

    activeSong.value = item;

    isPlaying.value = true;
  };

  const nextSong = (item: Song | null) => {
    isPlaying.value = false;
    let index: number = playList.value?.findIndex(
      (element: Song) => item?.id === element.id
    );

    if (!playList.value[index + 1]) {
      activeSong.value = playList.value[1];
    } else {
      activeSong.value = playList.value[index + 1];
    }
    isPlaying.value = true;
  };
  const prevSong = (item: Song | null) => {
    isPlaying.value = false;
    let index: number = playList.value?.findIndex(
      (element: Song) => item?.id === element.id
    );

    if (!playList.value[index - 1]) {
      activeSong.value = playList.value[playList.value.length - 1];
    } else {
      activeSong.value = playList.value[index - 1];
    }
    isPlaying.value = true;
  };
  const pauseSong = () => {
    isPlaying.value = false;
  };
  const playSong = () => {
    isPlaying.value = true;
  };

  return {
    activeSong,
    pauseSong,
    playList,
    nextSong,
    prevSong,
    selectSong,
    isPlaying,
    playSong,
    volume,
  };
};
