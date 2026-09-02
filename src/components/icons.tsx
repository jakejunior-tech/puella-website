import {
  Construction,
  Drill,
  TowerControl,
  Ship,
  Truck,
  Zap,
  Flame,
  GraduationCap,
  Recycle,
  SprayCan,
  Anchor,
  Shield,
  Users,
  Calendar,
  Layers,
  Wallet,
  Cog,
  Fuel,
  Settings2,
  type LucideIcon,
} from "lucide-react";

export type IconName =
  | "construction"
  | "excavator"
  | "crane"
  | "ship"
  | "roller"
  | "electric"
  | "oil"
  | "truck"
  | "gear"
  | "anchor"
  | "flame"
  | "graduation"
  | "recycle"
  | "spray"
  | "shield"
  | "users"
  | "calendar"
  | "layers"
  | "wallet";

const iconMap: Record<IconName, LucideIcon> = {
  construction: Construction,
  excavator: Drill,
  crane: TowerControl,
  ship: Ship,
  roller: Cog,
  electric: Zap,
  oil: Fuel,
  truck: Truck,
  gear: Settings2,
  anchor: Anchor,
  flame: Flame,
  graduation: GraduationCap,
  recycle: Recycle,
  spray: SprayCan,
  shield: Shield,
  users: Users,
  calendar: Calendar,
  layers: Layers,
  wallet: Wallet,
};

export default function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const IconComponent = iconMap[name] || Cog;
  return <IconComponent className={className} aria-hidden="true" />;
}