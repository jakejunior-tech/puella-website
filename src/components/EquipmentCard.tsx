import Link from "next/link";
import { Check } from "lucide-react";
import type { Equipment } from "@/data/site-data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EquipmentCard({ equipment }: { equipment: Equipment }) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-gray-200 animate-pulse" />
        </div>
        <div className="absolute top-3 right-3">
          {equipment.availability ? (
            <Badge variant="success">Available</Badge>
          ) : (
            <Badge variant="outline">Contact for availability</Badge>
          )}
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="font-bold text-lg">{equipment.name}</h3>
        <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
          {equipment.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {equipment.applications.slice(0, 3).map((app) => (
            <span
              key={app}
              className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
            >
              <Check className="h-3 w-3 text-primary" />
              {app}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">
          {equipment.specifications}
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Link
          href={`/contact?equipment=${encodeURIComponent(equipment.name)}`}
          className="w-full flex items-center justify-center bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
        >
          Request This Equipment
        </Link>
      </CardFooter>
    </Card>
  );
}