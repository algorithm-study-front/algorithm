function solution(S) {
  const passwordRegex = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_])(?!.*\s).{6,}$/
  );

  return passwordRegex.test(S);
}
