export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "text-center max-w-2xl mx-auto mb-12"
          : "max-w-2xl mb-10"
      }
    >
      {eyebrow && (
        <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 mt-4 leading-relaxed">{description}</p>
      )}
    </div>
  );
}