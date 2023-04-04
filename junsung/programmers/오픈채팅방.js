function solution(record) {
  const nickObj = {};
  const statusArr = [];
  const actionObj = {
    Enter: "들어왔습니다.",
    Leave: "나갔습니다.",
  };

  record.forEach((history) => {
    const [action, uid, nickname] = history.split(" ");

    if (nickname) {
      nickObj[uid] = nickname;
    }

    if (action !== "Change") {
      statusArr.push([uid, action]);
    }
  });

  return statusArr.map(([uid, action]) => `${nickObj[uid]}님이 ${actionObj[action]}`);
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
