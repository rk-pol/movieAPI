export function getYear(fullDate) {
  return fullDate.split('-')[0];
}

export function getUsersScore(vote_average) {
  return (vote_average * 10).toFixed(0);
}
