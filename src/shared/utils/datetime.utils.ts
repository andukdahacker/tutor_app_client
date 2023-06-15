import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export namespace DateTimeUtils {
  export function ago(timestamp: number) {
    return dayjs(timestamp).toNow(true);
  }
}
