import { renderHook, act } from "@testing-library/react-hooks";
import filterReducer from "../../hooks/filterReducer";

const setup = (params) => {
  const { result } = renderHook(() => filterReducer(params));
  return result;
};

test("should change search", () => {
  const result = setup();

  act(() => {
    result.current.changeKeyword({ search: "spider" });
  });

  expect(result.current.keyword).toBe("spider");
});
