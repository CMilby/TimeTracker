export function MSToHourMinSec(duration: number): string {
	var secs = Math.floor((duration / 1000) % 60);
	var mins = Math.floor((duration / (1000 * 60)) % 60);
	var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

	var hourStr = hours < 10 ? "0" + hours : hours.toString();
	var minStr = mins < 10 ? "0" + mins : mins.toString();
	var secStr = secs < 10 ? "0" + secs : secs.toString();

	return hourStr + ":" + minStr + ":" + secStr;
}
