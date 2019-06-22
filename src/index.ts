export abstract class SelectAll<N> {

    primary: N;
    secondary: N[];

    abstract isOn(node: N): boolean;
    abstract setOn(node: N): void;
    abstract setOff(node: N): void;

    constructor(primary: N, secondary: N[]) {
        this.primary = primary;
        this.secondary = secondary;
    }

    triggerPrimary() {
        if (this.isOn(this.primary)) {
            if (!this.secondary.some(n => this.isOn(n))) {
                this.secondary.forEach(n => {
                    if (!this.isOn(n)) {
                        this.setOn(n);
                    }
                });
            }
        } else {
            this.secondary.forEach(n => {
                if (this.isOn(n)) {
                    this.setOff(n);
                }
            });
        }
    }

    triggerSecondary() {
        if (this.secondary.some(n => this.isOn(n))) {
            if (!this.isOn(this.primary)) {
                this.setOn(this.primary);
            }
        } else {
            if (this.isOn(this.primary)) {
                this.setOff(this.primary);
            }
        }
    }
}

export class LazySelectAll<T> extends SelectAll<T> {
    isOnFunction: (node: T) => boolean;
    setOnFunction: (node: T) => void;
    setOffFunction: (node: T) => void;
    constructor(data: {
        primary: T,
        secondary: T[],
        isOn(node: T): boolean,
        setOn(node: T): void
        setOff(node: T): void
    }) {
        super(data.primary, data.secondary);
        this.isOnFunction = data.isOn;
        this.setOnFunction = data.setOn;
        this.setOffFunction = data.setOff;
    }
    isOn(node: T): boolean {
        return this.isOnFunction(node);
    }
    setOn(node: T): void {
        return this.setOnFunction(node);
    }
    setOff(node: T): void {
        return this.setOffFunction(node);
    }

}
