export declare abstract class SelectAll<N> {
    primary: N;
    secondary: N[];
    abstract isOn(node: N): boolean;
    abstract setOn(node: N): void;
    abstract setOff(node: N): void;
    constructor(primary: N, secondary: N[]);
    triggerPrimary(): void;
    triggerSecondary(): void;
}
