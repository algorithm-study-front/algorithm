function solution(fees, records) {
  const carStatus = {};

  records.forEach((record) => {
    const [time, carNum, status] = record.split(" ");
    const [hours, minutes] = time.split(":");
    const totalMinutes = Number(hours) * 60 + Number(minutes);

    if (status === "IN" && !carStatus[carNum]) {
      carStatus[carNum] = [totalMinutes, status];
    } else if (carStatus[carNum][1] === "OUT" && status === "IN") {
      const prevMinutes = carStatus[carNum][0];
      carStatus[carNum] = [totalMinutes - prevMinutes, status];
    } else if (status === "OUT") {
      const prevMinutes = carStatus[carNum][0];
      carStatus[carNum] = [totalMinutes - prevMinutes, status];
    }
  });

  const test = Object.keys(carStatus)
    .sort()
    .reduce((prev, cur) => {
      return {
        ...prev,
        [cur]: carStatus[cur],
      };
    }, {});

  return Object.entries(test).map(([key, value]) => {
    const [time, status] = value;

    if (status === "IN") {
      const newTime = 23 * 60 * 59;
      carStatus[key] = [newTime - time, "OUT"];
    }

    if (time <= 180) {
      return 5000;
    }
  });
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
