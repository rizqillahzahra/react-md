import React, { MutableRefObject, FunctionComponent } from "react";
import { render } from "react-testing-library";
import { cleanup, renderHook } from "react-hooks-testing-library";

import { useInheritContext, InheritContext } from "../useInheritContext";

afterEach(cleanup);

describe("useInheritContext", () => {
  it("should default to false", () => {
    const { result } = renderHook(() => useInheritContext(undefined));
    expect(result.current).toBe(false);
  });

  it("should update to true based on the InheritContext", () => {
    const result: MutableRefObject<boolean | undefined> = {
      current: undefined,
    };

    const Context: FunctionComponent = ({ children }) => (
      <InheritContext.Provider value={true}>{children}</InheritContext.Provider>
    );

    const Test1 = () => {
      result.current = useInheritContext(undefined);
      return null;
    };

    const Test2 = () => {
      result.current = useInheritContext(false);
      return null;
    };
    const Test3 = () => {
      result.current = useInheritContext(true);
      return null;
    };

    render(
      <Context>
        <Test1 />
      </Context>
    );
    expect(result.current).toBe(true);
    result.current = undefined;

    render(
      <Context>
        <Test2 />
      </Context>
    );
    expect(result.current).toBe(false);
    result.current = undefined;

    render(
      <Context>
        <Test3 />
      </Context>
    );
    expect(result.current).toBe(true);
    result.current = undefined;

    render(<Test2 />);
    expect(result.current).toBe(false);
    result.current = undefined;

    render(<Test3 />);
    expect(result.current).toBe(true);
    result.current = undefined;
  });
});
