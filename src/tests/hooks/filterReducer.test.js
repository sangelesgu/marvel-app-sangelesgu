import { renderHook, act } from "@testing-library/react-hooks";
import filterReducer from "../../hooks/filterReducer";

const setup = (params) => {
  const { result } = renderHook(() => filterReducer(params));
  return result;
};

console.log(setup);
test("should change search", () => {
  const result = setup();

  act(() => {
    result.current.changeSearch({ search: "spider" });
  });

  expect(result.current.search).toBe("spider");
});
