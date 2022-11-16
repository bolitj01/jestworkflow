//Based on example from https://jestjs.io/docs/timer-mocks
require("leaked-handles");
import timerGame from "./timerGame";

test("calls the callback after 1 second", () => {

    jest.useFakeTimers({timerLimit: 100}); //Can leave out obj arg
    jest.spyOn(global, 'setTimeout');

    const cb = jest.fn();

    const timer = timerGame(cb);
    timer.unref();

    expect(cb).not.toBeCalled();

    jest.advanceTimersByTime(1000);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    expect(cb).toBeCalled();
})
