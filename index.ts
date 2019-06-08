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
                this.secondary.forEach(n => this.setOn(n));
            }
        } else {
            this.secondary.forEach(n => this.setOff(n));
        }
    }

    triggerSecondary() {
        if (this.secondary.some(n => this.isOn(n))) {
            if (!this.isOn(this.primary)){
                this.setOn(this.primary);
            }
        }
    }
}
