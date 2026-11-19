"use client";

import { useMemo, useRef, useState, useId } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
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
   1. LINE CHART
   ========================================================= */
function LineChart({
  data,
  labels,
  format,
  height = "h-40",
  accent = "text-red-600 dark:text-red-400",
}: {
  data: number[];
  labels: string[];
  format?: (v: number) => string;
  height?: string;
  accent?: string;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // FIX: Menggunakan useId() untuk menggantikan Math.random()
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
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#${gradId})`} />
        <path
          d={linePath}
          className="stroke-current"
          fill="none"
          strokeWidth={1.5}
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
              r={2.2}
              className="fill-current"
              vectorEffect="non-scaling-stroke"
            />
          </>
        )}
      </svg>
      {hover !== null && (
        <div
          className="absolute -translate-x-1/2 top-0 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded shadow-md px-2 py-1 text-[10px] whitespace-nowrap pointer-events-none z-10"
          style={{
            left: `${(hover / (data.length - 1)) * 100}%`,
            transform: `translate(-50%, ${Math.max(0, (pts[hover][1] / H) * 100) - 8}%)`,
          }}
        >
          <div className="font-semibold text-gray-900 dark:text-slate-100">
            {fmt(data[hover])}
          </div>
          <div className="text-gray-500 dark:text-slate-400">
            {labels[hover]}
          </div>
        </div>
      )}
      <div className="flex justify-between text-[10px] text-gray-400 dark:text-slate-500 mt-1">
        {labels.map((l, i) => (
          <span
            key={i}
            className={
              hover === i
                ? "text-gray-900 dark:text-slate-100 font-semibold"
                : ""
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
   2. AREA CHART
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
      <div className="flex items-center gap-4 text-[11px] mb-2">
        <span className="flex items-center gap-1.5 text-gray-700 dark:text-slate-300">
          <span
            className="size-2 rounded-sm"
            style={{ backgroundColor: seriesA.color }}
          />
          {seriesA.label}
        </span>
        <span className="flex items-center gap-1.5 text-gray-700 dark:text-slate-300">
          <span
            className="size-2 rounded-sm"
            style={{ backgroundColor: seriesB.color }}
          />
          {seriesB.label}
        </span>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className={`w-full ${height}`}
      >
        <path d={b.area} fill={seriesB.color} fillOpacity={0.15} />
        <path
          d={b.line}
          fill="none"
          stroke={seriesB.color}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
        />
        <path d={a.area} fill={seriesA.color} fillOpacity={0.2} />
        <path
          d={a.line}
          fill="none"
          stroke={seriesA.color}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="flex justify-between text-[10px] text-gray-400 dark:text-slate-500 mt-1">
        {labels.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
      <div className="text-[10px] text-gray-400 dark:text-slate-500 mt-1 text-center">
        {fmt(Math.max(...all))} max
      </div>
    </div>
  );
}

/* =========================================================
   3. HORIZONTAL BAR CHART
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
    <div className="space-y-2">
      {data.map((d, i) => (
        <div
          key={d.label}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
          className={`flex items-center gap-2 text-xs rounded px-1 py-0.5 transition-colors ${
            hover === i ? "bg-gray-50 dark:bg-slate-800" : ""
          }`}
        >
          <span className="w-20 sm:w-24 shrink-0 text-gray-600 dark:text-slate-300 truncate">
            {d.label}
          </span>
          <div className="flex-1 h-3 bg-gray-100 dark:bg-slate-800 rounded overflow-hidden">
            <div
              className="h-full rounded transition-all duration-300"
              style={{
                width: `${(d.value / max) * 100}%`,
                backgroundColor: d.color ?? "#DC2626",
                opacity: hover === null || hover === i ? 1 : 0.5,
              }}
            />
          </div>
          <span className="w-12 text-right font-sans font-semibold text-gray-800 dark:text-slate-200">
            {fmt(d.value)}
          </span>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   4. COLUMN CHART
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
              <div className="absolute -top-1 text-[10px] font-sans font-semibold text-gray-900 dark:text-slate-100 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded px-1.5 py-0.5 whitespace-nowrap z-10">
                {fmt(d.value)}
              </div>
            )}
            <div
              className={`w-full rounded-t transition-all duration-200 ${
                hover === i
                  ? "bg-red-600 dark:bg-red-400"
                  : "bg-red-500/70 dark:bg-red-500/60"
              }`}
              style={{ height: `${Math.max(4, (d.value / max) * 100)}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-1.5">
        {data.map((d) => (
          <div
            key={d.label}
            className="flex-1 text-center text-[10px] text-gray-500 dark:text-slate-400 truncate"
          >
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   5. DONUT CHART
   ========================================================= */
function DonutChart({
  data,
  size = 130,
  thickness = 18,
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
    <div className="flex items-center gap-4 flex-wrap">
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
            className="stroke-gray-100 dark:stroke-slate-800"
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
                stroke={d.color || "#DC2626"}
                strokeWidth={thickness}
                strokeDasharray={dasharray}
                strokeDashoffset={dashoffset}
                opacity={hover === null || hover === i ? 1 : 0.3}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="transition-opacity duration-200 cursor-pointer"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-[9px] uppercase text-gray-500 dark:text-slate-400 tracking-wide">
            {centerLabel}
          </div>
          <div className="text-sm font-semibold text-gray-900 dark:text-slate-100">
            {centerValue}
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-27.5 space-y-1">
        {data.map((d, i) => (
          <div
            key={i}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className={`flex items-center justify-between gap-2 px-1.5 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
              hover === i ? "bg-gray-50 dark:bg-slate-800" : ""
            }`}
          >
            <span className="flex items-center gap-1.5 min-w-0">
              <span
                className="size-2 rounded-sm shrink-0"
                style={{ backgroundColor: d.color || "#DC2626" }}
              />
              <span className="truncate text-gray-700 dark:text-slate-300">
                {d.label}
              </span>
            </span>
            <span className="font-sans font-semibold text-gray-900 dark:text-slate-100 shrink-0">
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
      className={`w-full h-6 ${className || "stroke-current text-red-600 dark:text-red-400"}`}
    >
      <path
        d={path}
        fill="none"
        strokeWidth={1.5}
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
  size = 84,
}: {
  value: number;
  max: number;
  label: string;
  size?: number;
}) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const stroke = 7;
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
          className="stroke-gray-100 dark:stroke-slate-800"
          strokeWidth={stroke}
          strokeDasharray={`${arc} ${circ}`}
          strokeLinecap="round"
          transform={`rotate(135 ${size / 2} ${size / 2})`}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          className="stroke-red-600 dark:stroke-red-400 transition-all duration-500"
          strokeWidth={stroke}
          strokeDasharray={`${filled} ${circ}`}
          strokeLinecap="round"
          transform={`rotate(135 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-sm font-bold text-gray-900 dark:text-slate-100">
          {pct}%
        </div>
        <div className="text-[9px] text-gray-500 dark:text-slate-400">
          {label}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HERO
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
    safe: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900",
    low: "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-900",
    critical:
      "bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border-red-200 dark:border-red-900",
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
  const kpiIcons = {
    revenue: {
      icon: LuTrendingUp,
      color:
        "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50",
    },
    transactions: {
      icon: LuStore,
      color: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/50",
    },
    critical: {
      icon: LuTriangleAlert,
      color:
        "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50",
    },
  } as const;

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
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-150 bg-red-600/5 dark:bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 relative z-10">
        {/* HERO TEXT */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/70 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs sm:text-sm font-medium mb-6 shadow-xs">
            <LuZap className="text-red-600 dark:text-red-400 shrink-0" />
            <span>{content.badge}</span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6">
            {content.titleMain}{" "}
            <span className="text-red-600 dark:text-red-500 block sm:inline mt-1 sm:mt-0">
              {content.titleHighlight}
            </span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-red-600/25 transition-all duration-200 cursor-pointer"
            >
              <span>{content.primaryCta.label}</span>
              <LuArrowRight className="text-lg" />
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-200 cursor-pointer"
            >
              <span>{content.secondaryCta.label}</span>
              <LuArrowRight className="text-base" />
            </Link>
          </div>
        </div>

        {/* DASHBOARD PREVIEW */}
        <div className="w-full relative">
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_20px_60px_-20px_rgba(220,38,38,0.35)] dark:shadow-[0_20px_60px_-20px_rgba(220,38,38,0.25)] overflow-hidden">
            {/* ===== TOP RED HEADER ===== */}
            <div className="bg-red-600 dark:bg-red-700 text-white">
              <div className="flex items-center justify-between h-12 px-2 sm:px-4 gap-2">
                <div className="flex items-center min-w-0 flex-1">
                  <div className="flex flex-col leading-none pr-3 shrink-0">
                    <span className="font-bold text-sm tracking-wide">
                      {dash.brand}
                    </span>
                    <span className="text-[9px] text-red-100 dark:text-red-200/80 mt-0.5">
                      {dash.tagline}
                    </span>
                  </div>
                  {/* Feature nav of active module */}
                  <nav className="flex items-center overflow-x-auto flex-1 min-w-0">
                    {currentModule.features.map((f) => (
                      <button
                        key={f.key}
                        type="button"
                        onClick={() => setActiveFeature(f.key)}
                        className={`px-3 h-12 flex items-center text-[13px] whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
                          activeFeature === f.key
                            ? "bg-black/20 font-medium border-white"
                            : "hover:bg-white/10 text-white/90 border-transparent"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </nav>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white/90 shrink-0">
                  <LuSearch className="size-4 hidden sm:block" />
                  <div className="relative">
                    <LuBell className="size-4" />
                    <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-amber-300" />
                  </div>
                  <div className="size-7 rounded-full bg-white/20 flex items-center justify-center text-[11px] font-semibold">
                    {dash.user.initials}
                  </div>
                </div>
              </div>
            </div>

            {/* ===== BREADCRUMB BAR ===== */}
            <div className="border-b border-gray-200 dark:border-slate-800 px-3 sm:px-4 py-2 flex items-center justify-between bg-white dark:bg-slate-900">
              <div className="flex items-center gap-1.5 text-[13px] text-gray-500 dark:text-slate-400 min-w-0">
                <span className="shrink-0">{dash.breadcrumb.home}</span>
                <LuChevronRight className="size-3.5 text-gray-400 dark:text-slate-600 shrink-0" />
                <span className="shrink-0">{dash.appNav[activeModule]}</span>
                <LuChevronRight className="size-3.5 text-gray-400 dark:text-slate-600 shrink-0" />
                <span className="text-gray-900 dark:text-slate-100 font-medium truncate">
                  {activeFeatureLabel}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[11px] shrink-0">
                <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {dash.status.synced}
                </span>
              </div>
            </div>

            {/* ===== BODY: Sidebar (modules) + Main (fixed height scroll) ===== */}
            <div className="grid grid-cols-1 md:grid-cols-[210px_1fr] h-125 sm:h-145 bg-gray-50 dark:bg-slate-950">
              {/* SIDEBAR */}
              <aside className="hidden md:flex flex-col bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 p-2.5 overflow-y-auto">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500 px-2 mb-1.5">
                  {dash.sidebar.sectionMain}
                </div>
                <nav className="space-y-0.5">
                  {moduleKeys.map((key) => {
                    const Icon = moduleIcons[key];
                    const active = activeModule === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => selectModule(key)}
                        className={`w-full flex items-center gap-2 px-2.5 py-1.5 text-[13px] rounded transition-colors cursor-pointer ${
                          active
                            ? "bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 font-medium"
                            : "text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        <Icon className="size-4" />
                        <span>{dash.appNav[key]}</span>
                      </button>
                    );
                  })}
                </nav>

                <div className="mt-4">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500 px-2 mb-1">
                    {dash.sidebar.sectionBranch}
                  </div>
                  <button
                    type="button"
                    onClick={() => setBranchOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 text-[13px] text-gray-700 dark:text-slate-300 rounded hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <LuFolderKanban className="size-4" />
                      {dash.sidebar.branches.label}
                    </span>
                    <LuChevronDown
                      className={`size-3.5 transition-transform ${branchOpen ? "" : "-rotate-90"}`}
                    />
                  </button>
                  {branchOpen && (
                    <div className="mt-0.5 ml-3 pl-2 border-l border-gray-200 dark:border-slate-800 space-y-0.5 text-[12px]">
                      <div className="px-2 py-1 text-red-700 dark:text-red-300 font-medium">
                        {dash.sidebar.branches.main}
                      </div>
                      <div className="px-2 py-1 text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 cursor-pointer">
                        {dash.sidebar.branches.mall}
                      </div>
                      <div className="px-2 py-1 text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 cursor-pointer">
                        {dash.sidebar.branches.shift}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar footer */}
                <div className="mt-auto pt-3 border-t border-gray-200 dark:border-slate-800 space-y-1.5 px-1">
                  <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <LuSettings className="size-3.5" />
                      {dash.sidebar.footer}
                    </span>
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-[9px] text-gray-400 dark:text-slate-600 text-center tracking-wide">
                    {dash.sidebar.poweredBy}
                  </div>
                </div>
              </aside>

              {/* MAIN CONTENT — fixed height, scrollable */}
              <main className="h-full overflow-y-auto p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-slate-100 truncate">
                      {activeFeatureLabel}
                    </h2>
                    <p className="text-xs sm:text-[13px] text-gray-500 dark:text-slate-400 mt-0.5">
                      {currentModule.subtitle}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 px-2.5 py-1 rounded shrink-0">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    {dash.status.server}
                  </div>
                </div>

                {/* ===================== OVERVIEW / OVERVIEW ===================== */}
                {activeModule === "overview" &&
                  activeFeature === "overview" && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {(["revenue", "transactions", "critical"] as const).map(
                          (k) => {
                            const kpi = dash.modules.overview.kpi[k];
                            const { icon: Icon, color } = kpiIcons[k];
                            return (
                              <div
                                key={k}
                                className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded p-3.5"
                              >
                                <div className="flex items-center justify-between mb-2 gap-2">
                                  <span className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-slate-400 font-medium leading-tight">
                                    {kpi.label}
                                  </span>
                                  <span
                                    className={`size-7 rounded flex items-center justify-center shrink-0 ${color}`}
                                  >
                                    <Icon className="size-3.5" />
                                  </span>
                                </div>
                                <div className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-slate-100">
                                  {kpi.value}
                                </div>
                                <div className="text-[11px] text-gray-500 dark:text-slate-400 mt-1">
                                  {kpi.delta}
                                </div>
                                <div className="mt-2 -mb-1">
                                  <Sparkline
                                    data={dash.charts.revenueTrend.values}
                                  />
                                </div>
                              </div>
                            );
                          },
                        )}
                      </div>

                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded p-3">
                        <div className="text-[12px] font-semibold text-gray-900 dark:text-slate-100 mb-1">
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

                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded">
                        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 dark:border-slate-800">
                          <h3 className="text-[13px] font-semibold text-gray-900 dark:text-slate-100">
                            {dash.modules.overview.tasks.title}
                          </h3>
                          <span className="text-[11px] text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded font-medium">
                            {progressText}
                          </span>
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-slate-800">
                          {dash.modules.overview.tasks.items.map((t, i) => {
                            const done = tasksDone[i];
                            return (
                              <button
                                key={i}
                                type="button"
                                onClick={() => toggleTask(i)}
                                className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left hover:bg-gray-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                              >
                                <span className="flex items-center gap-2.5 min-w-0">
                                  <span
                                    className={`size-4 rounded-sm flex items-center justify-center border shrink-0 transition-colors ${
                                      done
                                        ? "bg-red-600 border-red-600 text-white"
                                        : "border-gray-300 dark:border-slate-600"
                                    }`}
                                  >
                                    {done && (
                                      <LuCircleCheck className="size-3" />
                                    )}
                                  </span>
                                  <span
                                    className={`text-[13px] truncate ${
                                      done
                                        ? "text-gray-400 dark:text-slate-500 line-through"
                                        : "text-gray-800 dark:text-slate-200"
                                    }`}
                                  >
                                    {t}
                                  </span>
                                </span>
                                <span
                                  className={`text-[11px] px-2 py-0.5 rounded shrink-0 ${
                                    done
                                      ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300"
                                      : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400"
                                  }`}
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
                {activeModule === "overview" &&
                  activeFeature === "analytics" && (
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded p-3.5">
                        <div className="text-[12px] font-semibold text-gray-900 dark:text-slate-100 mb-2">
                          {lang === "id"
                            ? "Penjualan per Kategori"
                            : "Sales by Category"}
                        </div>
                        <DonutChart
                          data={dash.charts.salesByCategory}
                          centerLabel={lang === "id" ? "Total" : "Total"}
                          centerValue={`Rp ${lang === "id" ? "100jt" : "100M"}`}
                        />
                      </div>
                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded p-3.5">
                        <div className="text-[12px] font-semibold text-gray-900 dark:text-slate-100 mb-2">
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
                  <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded">
                    <div className="overflow-x-auto">
                      <table className="w-full text-[12px] sm:text-[13px]">
                        <thead>
                          <tr className="bg-gray-50 dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 text-left text-[11px] uppercase tracking-wide text-gray-500 dark:text-slate-400">
                            <th className="px-4 py-2 font-medium">
                              {lang === "id" ? "Laporan" : "Report"}
                            </th>
                            <th className="px-4 py-2 font-medium">
                              {lang === "id" ? "Periode" : "Period"}
                            </th>
                            <th className="px-4 py-2 font-medium">
                              {lang === "id" ? "Nilai" : "Value"}
                            </th>
                            <th className="px-4 py-2 font-medium">
                              {lang === "id" ? "Status" : "Status"}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                          {dash.modules.overview.reports.map((r) => (
                            <tr
                              key={r.name}
                              className="hover:bg-gray-50 dark:hover:bg-slate-800/60"
                            >
                              <td className="px-4 py-2.5 font-medium text-gray-900 dark:text-slate-100">
                                {r.name}
                              </td>
                              <td className="px-4 py-2.5 text-gray-600 dark:text-slate-400">
                                {r.period}
                              </td>
                              <td className="px-4 py-2.5 font-sans text-gray-800 dark:text-slate-200">
                                {r.value}
                              </td>
                              <td className="px-4 py-2.5">
                                <span
                                  className={`inline-block px-2 py-0.5 rounded border text-[11px] font-medium ${
                                    r.status.toLowerCase().includes("final")
                                      ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900"
                                      : "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-900"
                                  }`}
                                >
                                  {r.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ===================== INVENTORY / PRODUCTS ===================== */}
                {activeModule === "inventory" &&
                  activeFeature === "products" && (
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded p-3.5">
                        <div className="text-[12px] font-semibold text-gray-900 dark:text-slate-100 mb-2">
                          {lang === "id"
                            ? "Stok per Produk"
                            : "Stock per Product"}
                        </div>
                        <ColumnChart
                          data={dash.charts.stockByProduct}
                          format={(v) => `${v} pcs`}
                        />
                      </div>

                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded">
                        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 dark:border-slate-800">
                          <h3 className="text-[13px] font-semibold text-gray-900 dark:text-slate-100">
                            {dash.modules.inventory.badge}
                          </h3>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-[12px] sm:text-[13px]">
                            <thead>
                              <tr className="bg-gray-50 dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 text-left text-[11px] uppercase tracking-wide text-gray-500 dark:text-slate-400">
                                <th className="px-4 py-2 font-medium">
                                  {dash.modules.inventory.table.product}
                                </th>
                                <th className="px-4 py-2 font-medium">
                                  {dash.modules.inventory.table.price}
                                </th>
                                <th className="px-4 py-2 font-medium">
                                  {dash.modules.inventory.table.stock}
                                </th>
                                <th className="px-4 py-2 font-medium">
                                  {dash.modules.inventory.table.status}
                                </th>
                                <th className="px-4 py-2 font-medium text-right">
                                  {dash.modules.inventory.table.action}
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                              {dash.modules.inventory.items.map((item, i) => {
                                const stock = stocks[i];
                                const status = statusFor(stock, item.minStock);
                                return (
                                  <tr
                                    key={item.sku}
                                    className="hover:bg-gray-50 dark:hover:bg-slate-800/60"
                                  >
                                    <td className="px-4 py-2.5">
                                      <div className="font-medium text-gray-900 dark:text-slate-100">
                                        {item.name}
                                      </div>
                                      <div className="text-[11px] font-sans text-gray-400 dark:text-slate-500">
                                        {item.sku}
                                      </div>
                                    </td>
                                    <td className="px-4 py-2.5 text-gray-700 dark:text-slate-300">
                                      {item.price}
                                    </td>
                                    <td className="px-4 py-2.5 font-sans font-semibold text-gray-900 dark:text-slate-100">
                                      {stock}
                                    </td>
                                    <td className="px-4 py-2.5">
                                      <span
                                        className={`inline-block px-2 py-0.5 rounded border text-[11px] font-medium ${statusStyles[status]}`}
                                      >
                                        {
                                          dash.modules.inventory.statusLabels[
                                            status
                                          ]
                                        }
                                      </span>
                                    </td>
                                    <td className="px-4 py-2.5 text-right">
                                      <button
                                        type="button"
                                        onClick={() => restock(i)}
                                        className="px-2.5 py-1 rounded bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 text-white text-[11px] font-medium transition-colors cursor-pointer"
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
                    </div>
                  )}

                {/* ===================== INVENTORY / LOW STOCK ===================== */}
                {activeModule === "inventory" &&
                  activeFeature === "lowstock" && (
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded p-3.5">
                        <div className="text-[12px] font-semibold text-gray-900 dark:text-slate-100 mb-2">
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
                                ? "#DC2626"
                                : statusFor(stocks[i], item.minStock) === "low"
                                  ? "#F59E0B"
                                  : "#10B981",
                          }))}
                          format={(v) => `${v} pcs`}
                        />
                      </div>
                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded">
                        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 dark:border-slate-800">
                          <h3 className="text-[13px] font-semibold text-gray-900 dark:text-slate-100">
                            {lang === "id"
                              ? "Produk Stok Rendah"
                              : "Low Stock Products"}
                          </h3>
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-slate-800">
                          {dash.modules.inventory.items.map((item, i) => {
                            const stock = stocks[i];
                            const status = statusFor(stock, item.minStock);
                            if (status === "safe") return null;
                            return (
                              <div
                                key={item.sku}
                                className="flex items-center justify-between gap-3 px-4 py-3"
                              >
                                <div className="min-w-0">
                                  <div className="text-[13px] font-medium text-gray-900 dark:text-slate-100">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-gray-500 dark:text-slate-400 font-sans">
                                    {item.sku} • min {item.minStock}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span
                                    className={`inline-block px-2 py-0.5 rounded border text-[11px] font-medium ${statusStyles[status]}`}
                                  >
                                    {
                                      dash.modules.inventory.statusLabels[
                                        status
                                      ]
                                    }
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => restock(i)}
                                    className="px-2.5 py-1 rounded bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 text-white text-[11px] font-medium transition-colors cursor-pointer"
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
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {dash.modules.inventory.warehouses.map((w) => {
                          const pct = Math.round((w.items / w.capacity) * 100);
                          return (
                            <div
                              key={w.name}
                              className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded p-3.5 flex flex-col items-center"
                            >
                              <RadialGauge
                                value={w.items}
                                max={w.capacity}
                                label={w.location}
                              />
                              <div className="text-[12px] font-semibold text-gray-900 dark:text-slate-100 mt-2 text-center truncate w-full">
                                {w.name}
                              </div>
                              <div className="text-[10px] text-gray-500 dark:text-slate-400 font-sans">
                                {w.items.toLocaleString()} /{" "}
                                {w.capacity.toLocaleString()}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                {/* ===================== ACCOUNTING / JOURNAL ===================== */}
                {activeModule === "accounting" &&
                  activeFeature === "journal" && (
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded p-3">
                        <div className="text-[12px] font-semibold text-gray-900 dark:text-slate-100 mb-1">
                          {lang === "id"
                            ? "Tren Saldo Kas (7 Hari)"
                            : "Balance Trend (7 Days)"}
                        </div>
                        <LineChart
                          data={dash.charts.journalBalance.values}
                          labels={dash.charts.journalBalance.labels}
                          format={formatMoney}
                          height="h-32"
                          accent="text-emerald-600 dark:text-emerald-400"
                        />
                      </div>

                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded">
                        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 dark:border-slate-800">
                          <h3 className="text-[13px] font-semibold text-gray-900 dark:text-slate-100">
                            {dash.modules.accounting.balanceLabel}
                          </h3>
                          <span className="text-[13px] font-sans font-semibold text-emerald-700 dark:text-emerald-400">
                            {dash.modules.accounting.balanceValue}
                          </span>
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-slate-800">
                          {dash.modules.accounting.entries.map((entry) => (
                            <div
                              key={entry.code}
                              className="flex items-center justify-between gap-3 px-4 py-3"
                            >
                              <div className="min-w-0">
                                <div className="flex items-center gap-2 text-[11px]">
                                  <span className="font-sans font-semibold text-gray-500 dark:text-slate-400">
                                    {entry.code}
                                  </span>
                                  <span className="text-gray-400 dark:text-slate-500">
                                    • {entry.time}
                                  </span>
                                </div>
                                <div className="text-[13px] font-medium text-gray-900 dark:text-slate-100 truncate mt-0.5">
                                  {entry.description}
                                </div>
                              </div>
                              <span
                                className={`text-[12px] font-sans font-semibold px-2.5 py-1 rounded shrink-0 ${
                                  entry.type === "in"
                                    ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300"
                                    : "bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300"
                                }`}
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
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded p-3.5">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-[12px] font-semibold text-gray-900 dark:text-slate-100">
                            {lang === "id"
                              ? "Arus Kas Masuk vs Keluar"
                              : "Inflow vs Outflow"}
                          </div>
                          <span className="text-[12px] font-sans font-semibold text-emerald-700 dark:text-emerald-400">
                            {dash.modules.accounting.balanceValue}
                          </span>
                        </div>
                        <AreaChart
                          seriesA={{
                            data: dash.charts.cashInflow.values,
                            label: lang === "id" ? "Masuk" : "In",
                            color: "#10B981",
                          }}
                          seriesB={{
                            data: dash.charts.cashOutflow.values,
                            label: lang === "id" ? "Keluar" : "Out",
                            color: "#DC2626",
                          }}
                          labels={dash.charts.cashInflow.labels}
                          format={formatMoney}
                        />
                      </div>
                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded p-3.5">
                        <div className="text-[12px] font-semibold text-gray-900 dark:text-slate-100 mb-2">
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
                            color: "#DC2626",
                          }))}
                          format={formatMoney}
                        />
                      </div>
                    </div>
                  )}

                {/* ===================== PURCHASING / VENDORS ===================== */}
                {activeModule === "purchasing" &&
                  activeFeature === "vendors" && (
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded p-3.5">
                        <div className="text-[12px] font-semibold text-gray-900 dark:text-slate-100 mb-2">
                          {lang === "id"
                            ? "Distribusi Belanja Vendor"
                            : "Vendor Spend Distribution"}
                        </div>
                        <DonutChart
                          data={dash.charts.vendorSpend}
                          centerLabel={lang === "id" ? "Total" : "Total"}
                          centerValue={`Rp ${lang === "id" ? "25,2jt" : "25.2M"}`}
                        />
                      </div>
                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded">
                        <div className="px-4 py-2.5 border-b border-gray-200 dark:border-slate-800">
                          <h3 className="text-[13px] font-semibold text-gray-900 dark:text-slate-100">
                            {dash.modules.purchasing.badge}
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
                          {dash.modules.purchasing.vendors.map((v) => (
                            <div
                              key={v.name}
                              className="border border-gray-200 dark:border-slate-800 rounded p-3"
                            >
                              <div className="flex items-start justify-between gap-2 mb-1.5">
                                <span className="text-[13px] font-semibold text-gray-900 dark:text-slate-100 leading-tight">
                                  {v.name}
                                </span>
                                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 shrink-0">
                                  {dash.modules.purchasing.contractActive}
                                </span>
                              </div>
                              <p className="text-[11px] text-gray-500 dark:text-slate-400 mb-2.5">
                                {v.category}
                              </p>
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="text-gray-400 dark:text-slate-500">
                                  {dash.modules.purchasing.leadTime}{" "}
                                  {v.leadTime}
                                </span>
                                <span className="text-red-600 dark:text-red-400 font-medium cursor-pointer hover:underline">
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
                {activeModule === "purchasing" &&
                  activeFeature === "orders" && (
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded p-3.5">
                        <div className="text-[12px] font-semibold text-gray-900 dark:text-slate-100 mb-2">
                          {lang === "id"
                            ? "Nilai Purchase Order"
                            : "Purchase Order Value"}
                        </div>
                        <ColumnChart
                          data={dash.charts.orderVolume}
                          format={formatMoney}
                        />
                      </div>
                      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded">
                        <div className="overflow-x-auto">
                          <table className="w-full text-[12px] sm:text-[13px]">
                            <thead>
                              <tr className="bg-gray-50 dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 text-left text-[11px] uppercase tracking-wide text-gray-500 dark:text-slate-400">
                                <th className="px-4 py-2 font-medium">
                                  {lang === "id" ? "Kode PO" : "PO Code"}
                                </th>
                                <th className="px-4 py-2 font-medium">
                                  {lang === "id" ? "Vendor" : "Vendor"}
                                </th>
                                <th className="px-4 py-2 font-medium">
                                  {lang === "id" ? "Total" : "Total"}
                                </th>
                                <th className="px-4 py-2 font-medium">
                                  {lang === "id" ? "Status" : "Status"}
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                              {dash.modules.purchasing.orders.map((o) => (
                                <tr
                                  key={o.code}
                                  className="hover:bg-gray-50 dark:hover:bg-slate-800/60"
                                >
                                  <td className="px-4 py-2.5 font-sans font-semibold text-gray-700 dark:text-slate-300">
                                    {o.code}
                                  </td>
                                  <td className="px-4 py-2.5 text-gray-900 dark:text-slate-100">
                                    {o.vendor}
                                  </td>
                                  <td className="px-4 py-2.5 font-sans text-gray-800 dark:text-slate-200">
                                    {o.total}
                                  </td>
                                  <td className="px-4 py-2.5">
                                    <span
                                      className={`inline-block px-2 py-0.5 rounded border text-[11px] font-medium ${
                                        o.status
                                          .toLowerCase()
                                          .includes("approv") ||
                                        o.status
                                          .toLowerCase()
                                          .includes("setuju")
                                          ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900"
                                          : "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-900"
                                      }`}
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
                    </div>
                  )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
