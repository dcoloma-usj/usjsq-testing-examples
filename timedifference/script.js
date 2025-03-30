
function convertTo24Hour(hour, minute, period) {
    // possible mistake 3, wrong limit (e.g. hour === 0)
    if (period === 'AM' && hour === 12) {
        hour = 0;
    } else if (period === 'PM' && hour !== 12) {
        hour += 12;
    }
    return hour * 60 + minute;
}

function getTimeDifference(startHour, startMinute, startPeriod, endHour, endMinute, endPeriod) {
    const startTotalMinutes = convertTo24Hour(startHour, startMinute, startPeriod);
    let endTotalMinutes = convertTo24Hour(endHour, endMinute, endPeriod);

    // possible mistake 1 - include only strictly smaller than
    if (endTotalMinutes <= startTotalMinutes) {
        endTotalMinutes += 24 * 60;
    }

    const differenceInMinutes = endTotalMinutes - startTotalMinutes;
    // possible mistake 2 - forget the Math.floor part
    const diffHours = Math.floor(differenceInMinutes / 60);
    const diffMinutes = differenceInMinutes % 60;

    return `${diffHours.toString().padStart(2, '0')}:${diffMinutes.toString().padStart(2, '0')}`;
}

function calculateDifference() {
    const startHour = parseInt(document.getElementById('startHour').value, 10);
    const startMinute = parseInt(document.getElementById('startMinute').value, 10);
    const startPeriod = document.getElementById('startType').value;

    const endHour = parseInt(document.getElementById('endHour').value, 10);
    const endMinute = parseInt(document.getElementById('endMinute').value, 10);
    const endPeriod = document.getElementById('endType').value;

    if (
        isNaN(startHour) || isNaN(startMinute) || 
        isNaN(endHour) || isNaN(endMinute) ||
        startHour < 1 || startHour > 12 ||
        startMinute < 0 || startMinute > 59 ||
        endHour < 1 || endHour > 12 ||
        endMinute < 0 || endMinute > 59
    ) {
        document.getElementById('result').innerText = 'Please enter valid values: hours between 1 and 12, minutes between 0 and 59.';
        return;
    }

    const result = getTimeDifference(startHour, startMinute, startPeriod, endHour, endMinute, endPeriod);
    document.getElementById('result').innerText = `Difference: ${result}`;
}
