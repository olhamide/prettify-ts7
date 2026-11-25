const effectPackagePath = /[\\/]node_modules[\\/](?:effect|@effect[\\/][^\\/]+)[\\/]/i;

const effectProtocolMemberNames = new Set(["pipe", "toString", "toJSON", "_op"]);

export function isPrivateByName(name: string): boolean {
  if (name === "_tag") return false;
  return name.startsWith("_") || name.startsWith("#");
}

export function isEffectInternalMember(name: string, declarationPaths: readonly string[]): boolean {
  if (declarationPaths.length === 0) return false;
  if (!declarationPaths.every((declarationPath) => effectPackagePath.test(declarationPath))) return false;
  return name.startsWith("~") || effectProtocolMemberNames.has(name);
}
