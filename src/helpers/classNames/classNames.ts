export type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional?: string[]): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(' ');
}

// classNames('remove-btn', {hovered:true, selectable:true, red:false}, ['gap8, padding3'])
//return
// "remove-btn hovered selectable gap8 padding3"
