/** @format */

const ONE_DAY = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

const DAY_OF_JOB_OFFER_REJECTION = new Date(2020, 6, 7, 8, 0);

function dateDiffInDays(a, b) {
  return Math.round(Math.abs((b - a) / ONE_DAY));
}

function setElmText(id, text) {
  document.querySelector(`#${id}`).textContent = text;
}

function formatTL(amount) {
  return `${amount}.00 ₺`;
}

function hashDateToNum(date) {
  return Math.ceil(Math.abs(date.getDate() / date.getMonth()));
}
function hashDateToNum2(date) {
  return 1 / Math.abs(date.getDate() / date.getMonth());
}

function setBackgroundYikikMan() {
  document.body.background = `./img/yikik-${Math.floor(
    Math.random() * 4
  )}.jpeg`;
}

(function main() {
  const now = new Date();
  const todaysLoss = dateDiffInDays(DAY_OF_JOB_OFFER_REJECTION, now) * 133;

  setBackgroundYikikMan();

  setElmText("salary-loss-daily-amount", formatTL(todaysLoss));

  setElmText(
    "vision-acquire-daily-amount",
    `${hashDateToNum2(now).toFixed(2)} miligram`
  );
  setElmText("cheap-pastry-eaten-daily-amount", `${hashDateToNum(now)} adet`);
})();
