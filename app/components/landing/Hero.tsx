"use client";

import { useMemo, useRef, useState, useId } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext"; // Pastikan nama file context Anda benar
import { heroContentByLang } from "@/app/const/landing/Hero";
import {
  LuArrowRight,
  LuZap,
  LuCircleCheck,
  LuLayoutDashboard,
  LuChevronDown,
  LuChevronRight,
  LuFolderKanban,
  LuSettings,
  LuBell,
  LuTrendingUp,
  LuPackage,
  LuStore,
  LuReceiptText,
  LuTruck,
  LuSearch,
  LuTriangleAlert,
} from "react-icons/lu";

type ModuleKey = "overview" | "inventory" | "accounting" | "purchasing";

/* =========================================================
   1. LINE CHART (Swiss Style - Thin Stroke)
   ========================================================= */
function LineChart({
  data,
  labels,
  format,
  height = "h-40",
  accent = "text-black dark:text-white", // Default ke monokrom
}: {
  data: number[];
  labels: string[];
  format?: (v: number) => string;
  height?: string;
  accent?: string;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const uniqueId = useId();
  const gradId = `grad-${uniqueId.replace(/:/g, "")}`;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const W = 100,
    H = 40,
    padY = 4;

  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - padY - ((v - min) / range) * (H - padY * 2);
    return [x, y] as const;
  });

  const linePath = pts
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(" ");
  const areaPath = `${linePath} L${W} ${H} L0 ${H} Z`;
  const fmt = format ?? ((v: number) => v.toFixed(1));

  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const idx = Math.round(ratio * (data.length - 1));
    setHover(Math.max(0, Math.min(data.length - 1, idx)));
  };

  return (
    <div className={`relative ${accent}`}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className={`w-full ${height} cursor-crosshair`}
        onMouseMove={onMove}
        onMouseLeave={() => setHover(null)}
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#${gradId})`} />
        <path
          d={linePath}
          className="stroke-current"
          fill="none"
          strokeWidth={1} // Garis tipis khas Swiss
          vectorEffect="non-scaling-stroke"
        />
        {hover !== null && (
          <>
            <line
              x1={pts[hover][0]}
              y1={0}
              x2={pts[hover][0]}
              y2={H}
              className="stroke-current"
              strokeDasharray="2 2"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
              opacity={0.5}
            />
            <circle
              cx={pts[hover][0]}
              cy={pts[hover][1]}
              r={2}
              className="fill-current"
              vectorEffect="non-scaling-stroke"
            />
          </>
        )}
      </svg>
      {hover !== null && (
        <div
          className="absolute -translate-x-1/2 top-0 bg-white dark:bg-black border border-black/20 dark:border-white/20 px-2 py-1 text-[10px] whitespace-nowrap pointer-events-none z-10 font-mono"
          style={{
            left: `${(hover / (data.length - 1)) * 100}%`,
            transform: `translate(-50%, ${Math.max(0, (pts[hover][1] / H) * 100) - 8}%)`,
          }}
        >
          <div className="font-bold text-black dark:text-white">
            {fmt(data[hover])}
          </div>
          <div className="text-black/50 dark:text-white/50">
            {labels[hover]}
          </div>
        </div>
      )}
      <div className="flex justify-between text-[10px] font-mono text-black/40 dark:text-white/40 mt-2 uppercase tracking-widest">
        {labels.map((l, i) => (
          <span
            key={i}
            className={
              hover === i ? "text-black dark:text-white font-bold" : ""
            }
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   2. AREA CHART (Sharp Edges)
   ========================================================= */
function AreaChart({
  seriesA,
  seriesB,
  labels,
  format,
  height = "h-44",
}: {
  seriesA: { data: number[]; label: string; color: string };
  seriesB: { data: number[]; label: string; color: string };
  labels: string[];
  format?: (v: number) => string;
  height?: string;
}) {
  const W = 100,
    H = 40;
  const all = [...seriesA.data, ...seriesB.data];
  const max = Math.max(...all),
    min = 0;
  const range = max - min || 1;

  const buildPath = (data: number[]) => {
    const pts = data.map((v, i) => {
      const x = (i / (data.length - 1)) * W;
      const y = H - ((v - min) / range) * H;
      return [x, y] as const;
    });
    const line = pts
      .map(
        ([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`,
      )
      .join(" ");
    const area = `${line} L${W} ${H} L0 ${H} Z`;
    return { line, area };
  };

  const a = buildPath(seriesA.data);
  const b = buildPath(seriesB.data);
  const fmt = format ?? ((v: number) => v.toFixed(1));

  return (
    <div>
      <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold mb-4">
        <span className="flex items-center gap-2 text-black/60 dark:text-white/60">
          <span className="size-2" style={{ backgroundColor: seriesA.color }} />
          {seriesA.label}
        </span>
        <span className="flex items-center gap-2 text-black/60 dark:text-white/60">
          <span className="size-2" style={{ backgroundColor: seriesB.color }} />
          {seriesB.label}
        </span>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className={`w-full ${height}`}
      >
        <path d={b.area} fill={seriesB.color} fillOpacity={0.08} />
        <path
          d={b.line}
          fill="none"
          stroke={seriesB.color}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
        <path d={a.area} fill={seriesA.color} fillOpacity={0.08} />
        <path
          d={a.line}
          fill="none"
          stroke={seriesA.color}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="flex justify-between text-[10px] font-mono text-black/40 dark:text-white/40 mt-2">
        {labels.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   3. BAR CHART (Hard Rectangles)
   ========================================================= */
function BarChart({
  data,
  format,
}: {
  data: { label: string; value: number; color?: string }[];
  format?: (v: number) => string;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const max = Math.max(...data.map((d) => d.value));
  const fmt = format ?? ((v: number) => v.toFixed(1));
  return (
    <div className="space-y-3">
      {data.map((d, i) => (
        <div
          key={d.label}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
          className="flex items-center gap-4 text-[11px] transition-colors"
        >
          <span className="w-24 shrink-0 text-black/60 dark:text-white/60 truncate font-medium uppercase tracking-wider">
            {d.label}
          </span>
          <div className="flex-1 h-2 bg-black/5 dark:bg-white/10">
            <div
              className="h-full transition-all duration-300"
              style={{
                width: `${(d.value / max) * 100}%`,
                backgroundColor:
                  hover === null || hover === i
                    ? d.color || "#000"
                    : d.color
                      ? `${d.color}80`
                      : "#00000080",
              }}
            />
          </div>
          <span className="w-12 text-right font-mono font-bold text-black dark:text-white shrink-0">
            {fmt(d.value)}
          </span>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   4. COLUMN CHART (Hard Rectangles)
   ========================================================= */
function ColumnChart({
  data,
  format,
  height = "h-36",
}: {
  data: { label: string; value: number }[];
  format?: (v: number) => string;
  height?: string;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const max = Math.max(...data.map((d) => d.value));
  const fmt = format ?? ((v: number) => v.toString());

  return (
    <div>
      <div className={`flex items-end gap-2 ${height}`}>
        {data.map((d, i) => (
          <div
            key={d.label}
            className="flex-1 flex flex-col items-center justify-end h-full cursor-pointer relative"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            {hover === i && (
              <div className="absolute -top-6 text-[10px] font-mono font-bold text-black dark:text-white bg-white dark:bg-black border border-black/20 dark:border-white/20 px-2 py-1 whitespace-nowrap z-10">
                {fmt(d.value)}
              </div>
            )}
            <div
              className={`w-full transition-all duration-200 ${
                hover === i
                  ? "bg-black dark:bg-white"
                  : "bg-black/20 dark:bg-white/20"
              }`}
              style={{ height: `${Math.max(4, (d.value / max) * 100)}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-3 border-t border-black/10 dark:border-white/10 pt-2">
        {data.map((d) => (
          <div
            key={d.label}
            className="flex-1 text-center text-[9px] font-mono uppercase tracking-widest text-black/50 dark:text-white/50 truncate"
          >
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   5. DONUT CHART (Swiss Grid)
   ========================================================= */
function DonutChart({
  data,
  size = 130,
  thickness = 12,
  centerLabel,
  centerValue,
}: {
  data: { label: string; value: number; color?: string }[];
  size?: number;
  thickness?: number;
  centerLabel: string;
  centerValue: string;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const total = data.reduce((s, d) => s + d.value, 0);
  const radius = (size - thickness) / 2;
  const circ = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className="stroke-black/5 dark:stroke-white/10"
            strokeWidth={thickness}
          />
          {data.map((d, i) => {
            const len = (d.value / total) * circ;
            const dasharray = `${len} ${circ - len}`;
            const dashoffset = -offset;
            offset += len;
            return (
              <circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={d.color || "#000"}
                strokeWidth={thickness}
                strokeDasharray={dasharray}
                strokeDashoffset={dashoffset}
                opacity={hover === null || hover === i ? 1 : 0.2}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="transition-opacity duration-200 cursor-pointer"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-[9px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">
            {centerLabel}
          </div>
          <div className="text-sm font-mono font-bold text-black dark:text-white">
            {centerValue}
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-27.5 space-y-2">
        {data.map((d, i) => (
          <div
            key={i}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className={`flex items-center justify-between gap-2 py-1 border-b border-black/5 dark:border-white/5 text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
              hover === i
                ? "text-black dark:text-white"
                : "text-black/60 dark:text-white/60"
            }`}
          >
            <span className="flex items-center gap-2 min-w-0">
              <span
                className="size-1.5 shrink-0"
                style={{ backgroundColor: d.color || "#000" }}
              />
              <span className="truncate">{d.label}</span>
            </span>
            <span className="font-mono font-bold text-black dark:text-white shrink-0">
              {((d.value / total) * 100).toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   6. SPARKLINE
   ========================================================= */
function Sparkline({
  data,
  className = "",
}: {
  data: number[];
  className?: string;
}) {
  const W = 100,
    H = 24;
  const max = Math.max(...data),
    min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * W,
    H - ((v - min) / range) * H,
  ]);
  const path = pts
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={`w-full h-8 ${className || "stroke-current text-black dark:text-white"}`}
    >
      <path
        d={path}
        fill="none"
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* =========================================================
   7. RADIAL GAUGE
   ========================================================= */
function RadialGauge({
  value,
  max,
  label,
  size = 80,
}: {
  value: number;
  max: number;
  label: string;
  size?: number;
}) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const stroke = 4;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const arc = circ * 0.75;
  const filled = (pct / 100) * arc;

  return (
    <div className="relative inline-flex" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          className="stroke-black/10 dark:stroke-white/10"
          strokeWidth={stroke}
          strokeDasharray={`${arc} ${circ}`}
          transform={`rotate(135 ${size / 2} ${size / 2})`}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          className="stroke-black dark:stroke-white transition-all duration-500"
          strokeWidth={stroke}
          strokeDasharray={`${filled} ${circ}`}
          transform={`rotate(135 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-sm font-mono font-bold text-black dark:text-white">
          {pct}%
        </div>
        <div className="text-[9px] uppercase tracking-widest text-black/50 dark:text-white/50 mt-0.5">
          {label}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HERO COMPONENT
   ========================================================= */
export default function Hero() {
  const { lang } = useLanguage();
  const content = heroContentByLang[lang];
  const dash = content.dashboard;

  const [activeModule, setActiveModule] = useState<ModuleKey>("overview");
  const [activeFeature, setActiveFeature] = useState<string>(
    dash.modules.overview.features[0].key,
  );
  const [branchOpen, setBranchOpen] = useState(true);
  const [tasksDone, setTasksDone] = useState<boolean[]>(() =>
    dash.modules.overview.tasks.items.map((_, i) => i === 0),
  );
  const [stocks, setStocks] = useState<number[]>(() =>
    dash.modules.inventory.items.map((item) => item.stock),
  );

  const selectModule = (key: ModuleKey) => {
    setActiveModule(key);
    setActiveFeature(dash.modules[key].features[0].key);
  };
  const toggleTask = (i: number) =>
    setTasksDone((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  const restock = (i: number) =>
    setStocks((prev) => prev.map((v, idx) => (idx === i ? v + 50 : v)));

  const statusFor = (
    stock: number,
    minStock: number,
  ): "safe" | "low" | "critical" => {
    if (stock >= minStock) return "safe";
    if (stock >= minStock * 0.5) return "low";
    return "critical";
  };

  const statusStyles: Record<"safe" | "low" | "critical", string> = {
    safe: "bg-transparent text-black dark:text-white border-black/20 dark:border-white/20",
    low: "bg-transparent text-black/70 dark:text-white/70 border-black/20 dark:border-white/20 border-dashed",
    critical:
      "bg-black text-white dark:bg-white dark:text-black border-transparent",
  };

  const moduleIcons: Record<ModuleKey, typeof LuPackage> = {
    overview: LuLayoutDashboard,
    inventory: LuPackage,
    accounting: LuReceiptText,
    purchasing: LuTruck,
  };

  const moduleKeys: ModuleKey[] = [
    "overview",
    "inventory",
    "accounting",
    "purchasing",
  ];

  const fmtNum = (v: number) =>
    lang === "id" ? v.toFixed(1).replace(".", ",") : v.toFixed(1);
  const moneySuffix = lang === "id" ? "jt" : "M";
  const formatMoney = (v: number) => `Rp ${fmtNum(v)}${moneySuffix}`;

  const tasksDoneCount = tasksDone.filter(Boolean).length;
  const progressText = useMemo(
    () =>
      dash.modules.overview.tasks.progressTemplate
        .replace("{done}", String(tasksDoneCount))
        .replace("{total}", String(tasksDone.length)),
    [
      dash.modules.overview.tasks.progressTemplate,
      tasksDoneCount,
      tasksDone.length,
    ],
  );

  const currentModule = dash.modules[activeModule];
  const activeFeatureLabel =
    currentModule.features.find((f) => f.key === activeFeature)?.label ??
    currentModule.features[0].label;

  return (
    <section className="relative w-full bg-[#fafafa] dark:bg-[#0a0a0a] text-black dark:text-white pt-24 pb-24 md:pt-32 md:pb-32 transition-colors duration-200">
      <div className="mx-auto max-w-360 px-6 md:px-10 flex flex-col gap-16">
        {/* HERO TEXT - SWISS LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="inline-block border border-black/20 dark:border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/60 mb-8">
              {content.badge}
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] uppercase">
              {content.titleMain} <br />
              <span className="text-black/30 dark:text-white/30">
                {content.titleHighlight}
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8 pb-2">
            <p className="text-[14px] leading-relaxed text-black/60 dark:text-white/60 max-w-[48ch]">
              {content.description}
            </p>
            <div className="flex flex-col gap-3 w-full">
              <Link
                href={content.primaryCta.href}
                className="group flex items-center justify-between w-full border border-black dark:border-white bg-black dark:bg-white px-5 py-4 text-[11px] font-bold uppercase tracking-widest text-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-colors rounded-none"
              >
                {content.primaryCta.label}
                <LuArrowRight className="size-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </Link>
              <Link
                href={content.secondaryCta.href}
                className="group flex items-center justify-between w-full border border-black/20 dark:border-white/20 px-5 py-4 text-[11px] font-bold uppercase tracking-widest text-black/70 dark:text-white/70 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-colors rounded-none"
              >
                {content.secondaryCta.label}
                <span className="h-1.5 w-1.5 bg-black dark:bg-white group-hover:scale-150 transition-transform rounded-none" />
              </Link>
            </div>
          </div>
        </div>

        {/* DASHBOARD MOCKUP - SWISS/SCANDI STYLE */}
        <div className="w-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#050505] shadow-none rounded-none">
          {/* TOP HEADER */}
          <div className="bg-black dark:bg-white text-white dark:text-black">
            <div className="flex items-center justify-between h-14 px-4 gap-4">
              <div className="flex items-center min-w-0 flex-1">
                <div className="flex flex-col leading-none pr-6 shrink-0 border-r border-white/20 dark:border-black/20">
                  <span className="font-bold text-[13px] tracking-widest uppercase">
                    {dash.brand}
                  </span>
                  <span className="text-[9px] text-white/60 dark:text-black/60 mt-1 uppercase tracking-widest">
                    {dash.tagline}
                  </span>
                </div>
                <nav className="flex items-center overflow-x-auto flex-1 min-w-0 ml-4 gap-2">
                  {currentModule.features.map((f) => (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => setActiveFeature(f.key)}
                      className={`px-3 py-1.5 text-[10px] uppercase tracking-widest transition-colors cursor-pointer border rounded-none ${
                        activeFeature === f.key
                          ? "bg-white text-black border-white dark:bg-black dark:text-white dark:border-black"
                          : "bg-transparent border-transparent hover:border-white/30 dark:hover:border-black/30 text-white/60 dark:text-black/60"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="flex items-center gap-4 text-white/70 dark:text-black/70 shrink-0">
                <LuSearch className="size-4 hidden sm:block" />
                <div className="relative">
                  <LuBell className="size-4" />
                  <span className="absolute -top-0.5 -right-0.5 size-1.5 bg-white dark:bg-black" />
                </div>
                <div className="size-7 border border-white/30 dark:border-black/30 flex items-center justify-center text-[10px] font-mono font-bold rounded-none">
                  {dash.user.initials}
                </div>
              </div>
            </div>
          </div>

          {/* BREADCRUMB BAR */}
          <div className="border-b border-black/10 dark:border-white/10 px-4 py-2.5 flex items-center justify-between bg-transparent">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-black/50 dark:text-white/50 min-w-0">
              <span className="shrink-0">{dash.breadcrumb.home}</span>
              <LuChevronRight className="size-3 shrink-0" />
              <span className="shrink-0">{dash.appNav[activeModule]}</span>
              <LuChevronRight className="size-3 shrink-0" />
              <span className="text-black dark:text-white truncate">
                {activeFeatureLabel}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold shrink-0">
              <span className="flex items-center gap-1.5 border border-black/20 dark:border-white/20 px-2 py-0.5">
                <span className="size-1.5 bg-black dark:bg-white animate-pulse" />
                {dash.status.synced}
              </span>
            </div>
          </div>

          {/* BODY */}
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] h-123 sm:h-145">
            {/* SIDEBAR */}
            <aside className="hidden md:flex flex-col border-r border-black/10 dark:border-white/10 p-4 overflow-y-auto">
              <div className="text-[9px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-3">
                {dash.sidebar.sectionMain}
              </div>
              <nav className="space-y-1">
                {moduleKeys.map((key) => {
                  const Icon = moduleIcons[key];
                  const active = activeModule === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => selectModule(key)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-[11px] font-bold uppercase tracking-wider rounded-none transition-colors cursor-pointer ${
                        active
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      <Icon className="size-4" />
                      <span>{dash.appNav[key]}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-8">
                <div className="text-[9px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-3">
                  {dash.sidebar.sectionBranch}
                </div>
                <button
                  type="button"
                  onClick={() => setBranchOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 rounded-none cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <LuFolderKanban className="size-4" />
                    {dash.sidebar.branches.label}
                  </span>
                  <LuChevronDown
                    className={`size-3 transition-transform ${branchOpen ? "" : "-rotate-90"}`}
                  />
                </button>
                {branchOpen && (
                  <div className="mt-1 ml-4 pl-3 border-l border-black/20 dark:border-white/20 space-y-1 text-[11px] font-medium text-black/50 dark:text-white/50">
                    <div className="px-2 py-1 text-black dark:text-white">
                      {dash.sidebar.branches.main}
                    </div>
                    <div className="px-2 py-1 hover:text-black dark:hover:text-white cursor-pointer">
                      {dash.sidebar.branches.mall}
                    </div>
                    <div className="px-2 py-1 hover:text-black dark:hover:text-white cursor-pointer">
                      {dash.sidebar.branches.shift}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-auto pt-4 border-t border-black/10 dark:border-white/10 px-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
                <span className="flex items-center gap-2">
                  <LuSettings className="size-3" />
                  {dash.sidebar.footer}
                </span>
                <span className="size-1.5 bg-black dark:bg-white" />
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="h-full overflow-y-auto p-6 md:p-8 bg-transparent">
              <div className="flex items-start justify-between gap-4 mb-8 border-b border-black/10 dark:border-white/10 pb-4">
                <div className="min-w-0">
                  <h2 className="text-2xl font-bold uppercase tracking-tight text-black dark:text-white truncate">
                    {activeFeatureLabel}
                  </h2>
                  <p className="text-[11px] uppercase tracking-widest text-black/50 dark:text-white/50 mt-1">
                    {currentModule.subtitle}
                  </p>
                </div>
              </div>

              {/* ===================== OVERVIEW / OVERVIEW ===================== */}
              {activeModule === "overview" && activeFeature === "overview" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-black/10 dark:border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-black/10 dark:divide-white/10">
                    {(["revenue", "transactions", "critical"] as const).map(
                      (k) => {
                        const kpi = dash.modules.overview.kpi[k];
                        return (
                          <div key={k} className="p-5 flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-black/50 dark:text-white/50 font-bold mb-4">
                              {kpi.label}
                            </span>
                            <div className="text-3xl font-mono font-bold tracking-tighter text-black dark:text-white mb-2">
                              {kpi.value}
                            </div>
                            <div className="text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-6">
                              {kpi.delta}
                            </div>
                            <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                              <Sparkline
                                data={dash.charts.revenueTrend.values}
                              />
                            </div>
                          </div>
                        );
                      },
                    )}
                  </div>

                  <div className="border border-black/10 dark:border-white/10 p-5">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-6">
                      {lang === "id"
                        ? "Tren Omset (7 Hari)"
                        : "Revenue Trend (7 Days)"}
                    </div>
                    <LineChart
                      data={dash.charts.revenueTrend.values}
                      labels={dash.charts.revenueTrend.labels}
                      format={formatMoney}
                    />
                  </div>

                  <div className="border border-black/10 dark:border-white/10">
                    <div className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white">
                        {dash.modules.overview.tasks.title}
                      </h3>
                      <span className="text-[10px] font-mono font-bold text-black dark:text-white bg-black/5 dark:bg-white/10 px-2 py-1">
                        {progressText}
                      </span>
                    </div>
                    <div className="divide-y divide-black/5 dark:divide-white/5">
                      {dash.modules.overview.tasks.items.map((t, i) => {
                        const done = tasksDone[i];
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => toggleTask(i)}
                            className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer rounded-none"
                          >
                            <span className="flex items-center gap-4 min-w-0">
                              <span
                                className={`size-4 flex items-center justify-center border shrink-0 transition-colors ${done ? "bg-black border-black text-white dark:bg-white dark:border-white dark:text-black" : "border-black/30 dark:border-white/30"}`}
                              >
                                {done && <LuCircleCheck className="size-3" />}
                              </span>
                              <span
                                className={`text-[12px] font-medium tracking-wide ${done ? "text-black/40 dark:text-white/40 line-through" : "text-black dark:text-white"}`}
                              >
                                {t}
                              </span>
                            </span>
                            <span
                              className={`text-[9px] uppercase tracking-widest font-bold px-2 py-1 shrink-0 ${done ? "text-black/40 dark:text-white/40" : "text-black dark:text-white"}`}
                            >
                              {done
                                ? dash.modules.overview.tasks.doneLabel
                                : dash.modules.overview.tasks.pendingLabel}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== OVERVIEW / ANALYTICS ===================== */}
              {activeModule === "overview" && activeFeature === "analytics" && (
                <div className="space-y-6">
                  <div className="border border-black/10 dark:border-white/10 p-6">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-8">
                      {lang === "id"
                        ? "Penjualan per Kategori"
                        : "Sales by Category"}
                    </div>
                    <DonutChart
                      data={dash.charts.salesByCategory}
                      centerLabel="Total"
                      centerValue={`Rp ${lang === "id" ? "100jt" : "100M"}`}
                    />
                  </div>
                  <div className="border border-black/10 dark:border-white/10 p-6">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-6">
                      {lang === "id"
                        ? "Kontribusi per Kategori"
                        : "Contribution per Category"}
                    </div>
                    <BarChart
                      data={dash.charts.salesByCategory}
                      format={(v) => `${fmtNum(v)}${moneySuffix}`}
                    />
                  </div>
                </div>
              )}

              {/* ===================== OVERVIEW / REPORTS ===================== */}
              {activeModule === "overview" && activeFeature === "reports" && (
                <div className="border border-black/10 dark:border-white/10 overflow-x-auto">
                  <table className="w-full text-[11px] uppercase tracking-wider">
                    <thead>
                      <tr className="border-b border-black/10 dark:border-white/10 text-left text-[9px] text-black/50 dark:text-white/50">
                        <th className="px-5 py-3 font-bold">Report</th>
                        <th className="px-5 py-3 font-bold">Period</th>
                        <th className="px-5 py-3 font-bold">Value</th>
                        <th className="px-5 py-3 font-bold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5 dark:divide-white/5">
                      {dash.modules.overview.reports.map((r) => (
                        <tr
                          key={r.name}
                          className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                          <td className="px-5 py-4 font-bold text-black dark:text-white">
                            {r.name}
                          </td>
                          <td className="px-5 py-4 text-black/60 dark:text-white/60 font-mono">
                            {r.period}
                          </td>
                          <td className="px-5 py-4 font-mono font-bold text-black dark:text-white">
                            {r.value}
                          </td>
                          <td className="px-5 py-4">
                            <span
                              className={`inline-block px-2 py-1 border text-[9px] font-bold ${r.status.toLowerCase().includes("final") ? "border-black dark:border-white text-black dark:text-white bg-black/5 dark:bg-white/10" : "border-transparent text-black/50 dark:text-white/50"}`}
                            >
                              {r.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ===================== INVENTORY / PRODUCTS ===================== */}
              {activeModule === "inventory" && activeFeature === "products" && (
                <div className="space-y-6">
                  <div className="border border-black/10 dark:border-white/10 p-6">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-8">
                      {lang === "id" ? "Stok per Produk" : "Stock per Product"}
                    </div>
                    <ColumnChart
                      data={dash.charts.stockByProduct}
                      format={(v) => `${v} pcs`}
                    />
                  </div>

                  <div className="border border-black/10 dark:border-white/10 overflow-x-auto">
                    <div className="p-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white">
                        {dash.modules.inventory.badge}
                      </h3>
                    </div>
                    <table className="w-full text-[11px] uppercase tracking-wider">
                      <thead>
                        <tr className="border-b border-black/10 dark:border-white/10 text-left text-[9px] text-black/50 dark:text-white/50">
                          <th className="px-5 py-3 font-bold">
                            {dash.modules.inventory.table.product}
                          </th>
                          <th className="px-5 py-3 font-bold">
                            {dash.modules.inventory.table.price}
                          </th>
                          <th className="px-5 py-3 font-bold">
                            {dash.modules.inventory.table.stock}
                          </th>
                          <th className="px-5 py-3 font-bold">
                            {dash.modules.inventory.table.status}
                          </th>
                          <th className="px-5 py-3 font-bold text-right">
                            {dash.modules.inventory.table.action}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/5 dark:divide-white/5">
                        {dash.modules.inventory.items.map((item, i) => {
                          const stock = stocks[i];
                          const status = statusFor(stock, item.minStock);
                          return (
                            <tr
                              key={item.sku}
                              className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                            >
                              <td className="px-5 py-4">
                                <div className="font-bold text-black dark:text-white">
                                  {item.name}
                                </div>
                                <div className="text-[9px] font-mono text-black/40 dark:text-white/40 mt-1">
                                  {item.sku}
                                </div>
                              </td>
                              <td className="px-5 py-4 font-mono text-black/60 dark:text-white/60">
                                {item.price}
                              </td>
                              <td className="px-5 py-4 font-mono font-bold text-black dark:text-white">
                                {stock}
                              </td>
                              <td className="px-5 py-4">
                                <span
                                  className={`inline-block px-2 py-1 border text-[9px] font-bold ${statusStyles[status]}`}
                                >
                                  {dash.modules.inventory.statusLabels[status]}
                                </span>
                              </td>
                              <td className="px-5 py-4 text-right">
                                <button
                                  type="button"
                                  onClick={() => restock(i)}
                                  className="px-3 py-1.5 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-[9px] font-bold uppercase tracking-wider transition-colors rounded-none cursor-pointer"
                                >
                                  {dash.modules.inventory.restockButton}
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ===================== INVENTORY / LOW STOCK ===================== */}
              {activeModule === "inventory" && activeFeature === "lowstock" && (
                <div className="space-y-6">
                  <div className="border border-black/10 dark:border-white/10 p-6">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-8">
                      {lang === "id"
                        ? "Perbandingan Stok vs Minimum"
                        : "Stock vs Minimum"}
                    </div>
                    <BarChart
                      data={dash.modules.inventory.items.map((item, i) => ({
                        label: item.name.split(" ").slice(0, 2).join(" "),
                        value: stocks[i],
                        color:
                          statusFor(stocks[i], item.minStock) === "critical"
                            ? "#000000"
                            : statusFor(stocks[i], item.minStock) === "low"
                              ? "#666666"
                              : "#CCCCCC",
                      }))}
                      format={(v) => `${v} pcs`}
                    />
                  </div>
                  <div className="border border-black/10 dark:border-white/10">
                    <div className="p-4 border-b border-black/10 dark:border-white/10">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white">
                        {lang === "id"
                          ? "Produk Stok Rendah"
                          : "Low Stock Products"}
                      </h3>
                    </div>
                    <div className="divide-y divide-black/5 dark:divide-white/5">
                      {dash.modules.inventory.items.map((item, i) => {
                        const stock = stocks[i];
                        const status = statusFor(stock, item.minStock);
                        if (status === "safe") return null;
                        return (
                          <div
                            key={item.sku}
                            className="flex items-center justify-between gap-4 p-4"
                          >
                            <div className="min-w-0">
                              <div className="text-[12px] font-bold text-black dark:text-white uppercase tracking-wider">
                                {item.name}
                              </div>
                              <div className="text-[9px] font-mono text-black/50 dark:text-white/50 mt-1">
                                {item.sku} • min {item.minStock}
                              </div>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                              <span
                                className={`inline-block px-2 py-1 border text-[9px] font-bold ${statusStyles[status]}`}
                              >
                                {dash.modules.inventory.statusLabels[status]}
                              </span>
                              <button
                                type="button"
                                onClick={() => restock(i)}
                                className="px-3 py-1.5 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-[9px] font-bold uppercase tracking-wider transition-colors rounded-none cursor-pointer"
                              >
                                {dash.modules.inventory.restockButton}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== INVENTORY / WAREHOUSES ===================== */}
              {activeModule === "inventory" &&
                activeFeature === "warehouses" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {dash.modules.inventory.warehouses.map((w) => (
                      <div
                        key={w.name}
                        className="border border-black/10 dark:border-white/10 p-6 flex flex-col items-center justify-center"
                      >
                        <RadialGauge
                          value={w.items}
                          max={w.capacity}
                          label={w.location}
                        />
                        <div className="text-[11px] font-bold text-black dark:text-white mt-4 text-center truncate w-full uppercase tracking-wider">
                          {w.name}
                        </div>
                        <div className="text-[10px] font-mono text-black/50 dark:text-white/50 mt-1">
                          {w.items.toLocaleString()} /{" "}
                          {w.capacity.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              {/* ===================== ACCOUNTING / JOURNAL ===================== */}
              {activeModule === "accounting" && activeFeature === "journal" && (
                <div className="space-y-6">
                  <div className="border border-black/10 dark:border-white/10 p-6">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-6">
                      {lang === "id"
                        ? "Tren Saldo Kas (7 Hari)"
                        : "Balance Trend (7 Days)"}
                    </div>
                    <LineChart
                      data={dash.charts.journalBalance.values}
                      labels={dash.charts.journalBalance.labels}
                      format={formatMoney}
                      height="h-32"
                    />
                  </div>

                  <div className="border border-black/10 dark:border-white/10">
                    <div className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white">
                        {dash.modules.accounting.balanceLabel}
                      </h3>
                      <span className="text-[12px] font-mono font-bold text-black dark:text-white">
                        {dash.modules.accounting.balanceValue}
                      </span>
                    </div>
                    <div className="divide-y divide-black/5 dark:divide-white/5">
                      {dash.modules.accounting.entries.map((entry) => (
                        <div
                          key={entry.code}
                          className="flex items-center justify-between gap-4 p-4"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-3 text-[9px] font-mono text-black/40 dark:text-white/40">
                              <span>{entry.code}</span>
                              <span>• {entry.time}</span>
                            </div>
                            <div className="text-[12px] font-bold text-black dark:text-white uppercase tracking-wider mt-1 truncate">
                              {entry.description}
                            </div>
                          </div>
                          <span
                            className={`text-[11px] font-mono font-bold px-2 py-1 shrink-0 border border-black/10 dark:border-white/10 ${entry.type === "in" ? "bg-black text-white dark:bg-white dark:text-black" : "bg-transparent text-black/60 dark:text-white/60"}`}
                          >
                            {entry.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== ACCOUNTING / CASH FLOW ===================== */}
              {activeModule === "accounting" &&
                activeFeature === "cashflow" && (
                  <div className="space-y-6">
                    <div className="border border-black/10 dark:border-white/10 p-6">
                      <div className="flex items-center justify-between mb-8">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50">
                          {lang === "id"
                            ? "Arus Kas Masuk vs Keluar"
                            : "Inflow vs Outflow"}
                        </div>
                        <span className="text-[12px] font-mono font-bold text-black dark:text-white">
                          {dash.modules.accounting.balanceValue}
                        </span>
                      </div>
                      <AreaChart
                        seriesA={{
                          data: dash.charts.cashInflow.values,
                          label: lang === "id" ? "Masuk" : "In",
                          color: "#000000",
                        }}
                        seriesB={{
                          data: dash.charts.cashOutflow.values,
                          label: lang === "id" ? "Keluar" : "Out",
                          color: "#888888",
                        }}
                        labels={dash.charts.cashInflow.labels}
                        format={formatMoney}
                      />
                    </div>
                    <div className="border border-black/10 dark:border-white/10 p-6">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-6">
                        {lang === "id"
                          ? "Perbandingan Harian"
                          : "Daily Comparison"}
                      </div>
                      <BarChart
                        data={dash.charts.cashInflow.labels.map((l, i) => ({
                          label: l,
                          value:
                            dash.charts.cashInflow.values[i] -
                            dash.charts.cashOutflow.values[i],
                          color: "#000000",
                        }))}
                        format={formatMoney}
                      />
                    </div>
                  </div>
                )}

              {/* ===================== PURCHASING / VENDORS ===================== */}
              {activeModule === "purchasing" && activeFeature === "vendors" && (
                <div className="space-y-6">
                  <div className="border border-black/10 dark:border-white/10 p-6">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-8">
                      {lang === "id"
                        ? "Distribusi Belanja Vendor"
                        : "Vendor Spend Distribution"}
                    </div>
                    <DonutChart
                      data={dash.charts.vendorSpend}
                      centerLabel="Total"
                      centerValue={`Rp ${lang === "id" ? "25,2jt" : "25.2M"}`}
                    />
                  </div>
                  <div className="border border-black/10 dark:border-white/10">
                    <div className="p-4 border-b border-black/10 dark:border-white/10">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white">
                        {dash.modules.purchasing.badge}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black/5 dark:divide-white/5">
                      {dash.modules.purchasing.vendors.map((v) => (
                        <div
                          key={v.name}
                          className="p-4 flex flex-col justify-between"
                        >
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <span className="text-[12px] font-bold text-black dark:text-white uppercase tracking-wider leading-tight">
                              {v.name}
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-black/20 dark:border-white/20 shrink-0">
                              {dash.modules.purchasing.contractActive}
                            </span>
                          </div>
                          <p className="text-[10px] text-black/50 dark:text-white/50 mb-4">
                            {v.category}
                          </p>
                          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold mt-auto border-t border-black/5 dark:border-white/5 pt-3">
                            <span className="text-black/40 dark:text-white/40">
                              {dash.modules.purchasing.leadTime} {v.leadTime}
                            </span>
                            <span className="text-black dark:text-white cursor-pointer hover:underline">
                              {dash.modules.purchasing.newPo}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== PURCHASING / ORDERS ===================== */}
              {activeModule === "purchasing" && activeFeature === "orders" && (
                <div className="space-y-6">
                  <div className="border border-black/10 dark:border-white/10 p-6">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-8">
                      {lang === "id"
                        ? "Nilai Purchase Order"
                        : "Purchase Order Value"}
                    </div>
                    <ColumnChart
                      data={dash.charts.orderVolume}
                      format={formatMoney}
                    />
                  </div>
                  <div className="border border-black/10 dark:border-white/10 overflow-x-auto">
                    <table className="w-full text-[11px] uppercase tracking-wider">
                      <thead>
                        <tr className="border-b border-black/10 dark:border-white/10 text-left text-[9px] text-black/50 dark:text-white/50">
                          <th className="px-5 py-3 font-bold">PO Code</th>
                          <th className="px-5 py-3 font-bold">Vendor</th>
                          <th className="px-5 py-3 font-bold">Total</th>
                          <th className="px-5 py-3 font-bold">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/5 dark:divide-white/5">
                        {dash.modules.purchasing.orders.map((o) => (
                          <tr
                            key={o.code}
                            className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                          >
                            <td className="px-5 py-4 font-mono font-bold text-black dark:text-white">
                              {o.code}
                            </td>
                            <td className="px-5 py-4 font-bold text-black/80 dark:text-white/80">
                              {o.vendor}
                            </td>
                            <td className="px-5 py-4 font-mono text-black dark:text-white">
                              {o.total}
                            </td>
                            <td className="px-5 py-4">
                              <span
                                className={`inline-block px-2 py-1 border text-[9px] font-bold ${o.status.toLowerCase().includes("approv") || o.status.toLowerCase().includes("setuju") ? "border-black dark:border-white bg-black text-white dark:bg-white dark:text-black" : "border-black/20 dark:border-white/20 text-black/50 dark:text-white/50"}`}
                              >
                                {o.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
