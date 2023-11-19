import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export namespace DateTimeUtils {
  export function ago(timestamp: number) {
    const timeAgo = dayjs(timestamp * 1000).toNow(true);

    return timeAgo;
  }
}
