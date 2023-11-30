import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import dayjs from 'dayjs';

interface EventWriteStore {
  hide: boolean;
  title: string;
  postDate: string;
  postTime: string;
  postEndDate: string;
  postEndTime: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  thumbForMo: string;
  thumbForTb: string;
  thumbForPc: string;
  content: string;
  setHide: (hide: boolean) => void;
  setTitle: (title: string) => void;
  setPostDate: (postDate: string) => void;
  setPostTime: (postTime: string) => void;
  setPostEndDate: (postDate: string) => void;
  setPostEndTime: (postTime: string) => void;
  setStartDate: (startDate: string) => void;
  setStartTime: (startTime: string) => void;
  setEndDate: (endDate: string) => void;
  setEndTime: (endTime: string) => void;
  setThumbForMo: (thumbForMo: string) => void;
  setThumbForTb: (thumbForTb: string) => void;
  setThumbForPc: (thumbForPc: string) => void;
  setContent: (content: string) => void;
}

const today = dayjs();
const endDay = today.add(14, 'day');

const useEventWriteStore = create<EventWriteStore>()(
  devtools((set) => ({
    hide: true,
    title: '',
    postDate: today.format('YYYY-MM-DD'),
    postTime: today.format('HH:mm:ss'),
    postEndDate: endDay.format('YYYY-MM-DD'),
    postEndTime: endDay.format('HH:mm:ss'),
    startDate: today.format('YYYY-MM-DD'),
    startTime: today.format('HH:mm:ss'),
    endDate: endDay.format('YYYY-MM-DD'),
    endTime: endDay.format('HH:mm:ss'),
    thumbForMo: '',
    thumbForTb: '',
    thumbForPc: '',
    content: '',
    setHide: (hide: boolean) => set((state) => ({ hide: hide })),
    setTitle: (title: string) => set((state) => ({ title: title })),
    setPostDate: (postDate: string) => set((state) => ({ postDate: postDate })),
    setPostTime: (postTime: string) => set((state) => ({ postTime: postTime })),
    setPostEndDate: (postEndDate: string) => set((state) => ({ postEndDate: postEndDate })),
    setPostEndTime: (postEndTime: string) => set((state) => ({ postEndTime: postEndTime })),
    setStartDate: (startDate: string) => set((state) => ({ startDate: startDate })),
    setStartTime: (startTime: string) => set((state) => ({ startTime: startTime })),
    setEndDate: (endDate: string) => set((state) => ({ endDate: endDate })),
    setEndTime: (endTime: string) => set((state) => ({ endTime: endTime })),
    setThumbForMo: (thumbForMo: string) => set((state) => ({ thumbForMo: thumbForMo })),
    setThumbForTb: (thumbForTb: string) => set((state) => ({ thumbForTb: thumbForTb })),
    setThumbForPc: (thumbForPc: string) => set((state) => ({ thumbForPc: thumbForPc })),
    setContent: (content: string) => set((state) => ({ content: content })),
  })),
);

export default useEventWriteStore;
