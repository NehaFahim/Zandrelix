import {
  Code2,
  Smartphone,
  ShoppingBag,
  ShoppingCart,
  BrainCircuit,
  Palette,
  Blocks,
  ArrowRight,
} from "lucide-react";

function IconTile({
  children,
  from,
  to,
}: {
  children: React.ReactNode;
  from: string;
  to: string;
}) {
  return (
    <span
      className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center flex-shrink-0"
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      {children}
    </span>
  );
}

export function WebDevTile() {
  return (
    <IconTile from="#6366f1" to="#8b5cf6">
      <Code2 size={32} strokeWidth={1.8} />
    </IconTile>
  );
}

export function MobileAppTile() {
  return (
    <IconTile from="#06b6d4" to="#3b82f6">
      <Smartphone size={32} strokeWidth={1.8} />
    </IconTile>
  );
}

export function ShopifyDevTile() {
  return (
    <IconTile from="#22c55e" to="#16a34a">
      <ShoppingBag size={32} strokeWidth={1.8} />
    </IconTile>
  );
}

export function EcommerceTile() {
  return (
    <IconTile from="#f59e0b" to="#f97316">
      <ShoppingCart size={32} strokeWidth={1.8} />
    </IconTile>
  );
}

export function AiSolutionsTile() {
  return (
    <IconTile from="#a855f7" to="#ec4899">
      <BrainCircuit size={32} strokeWidth={1.8} />
    </IconTile>
  );
}

export function UiuxTile() {
  return (
    <IconTile from="#ec4899" to="#f43f5e">
      <Palette size={32} strokeWidth={1.8} />
    </IconTile>
  );
}

export function CustomSolutionsTile() {
  return (
    <IconTile from="#14b8a6" to="#0ea5e9">
      <Blocks size={32} strokeWidth={1.8} />
    </IconTile>
  );
}

export function ArrowRightTiny() {
  return <ArrowRight size={16} strokeWidth={2} />;
}