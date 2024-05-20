import main from './main';
main();
test("jsdom", () => {
  const container = document.querySelector('.container')
  expect(container).toBeNull();
});
