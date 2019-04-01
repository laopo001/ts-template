/**
 * File: c:\Users\35327\Projects\ts-template\src\macro_task.ts
 * Project: c:\Users\35327\Projects\ts-template
 * Created Date: Monday, April 1st 2019, 5:09:23 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Monday, April 1st 2019, 7:17:17 pm
 * Modified By:
 * -----
 * Copyright (c) 2019 liaodh
 */

enum STATE {
    PENDING = 'PENDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED'
}
export class MacroTask<T> implements Promise<T> {
    private value?: T;
    state: STATE = STATE.PENDING;
    private onfulfilledArray = [];
    private onrejectedArray = [];
    constructor(private callback: (...args) => T, time: number = 0) {
        setTimeout(() => {
            try {
                this.value = callback();
                this.state = STATE.FULFILLED;
            } catch (e) {
                this.state = STATE.REJECTED;
            }
            if (this.state === STATE.FULFILLED) {
                this.onfulfilledArray.forEach(x => {
                    x(this.value);
                })
            } else {
                this.onrejectedArray.forEach(x => {
                    x(this.value);
                })
            }
        }, time)
    }
    static run<T>(callback: (...args) => T, time: number = 0) {
        return new MacroTask(callback, time);
    }
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2> {
        if (this.state === STATE.PENDING) {
            this.onfulfilledArray.push(onfulfilled);
            this.onrejectedArray.push(onrejected);
        } else {
            if (this.state === STATE.FULFILLED) {
                onfulfilled(this.value);
            } else {
                onrejected(this.value);
            }
        }
        return this as any;
    }
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult> {
        if (this.state === STATE.PENDING) {
            this.onrejectedArray.push(onrejected);
        } else {
            onrejected(this.value);
        }
        return this;
    }
    finally() {
        console.log('no implement')
        return this
    }
    get [Symbol.toStringTag]() {
        return 'MacroTask Object'
    }
}

class MacroTaskPool {
    queue: Array<MacroTask<any>>;
}