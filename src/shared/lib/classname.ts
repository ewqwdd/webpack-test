type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, extra: string[] = []): string {
    return [
        cls,
        ...extra,
        Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key)
    ].join(' ')
}
