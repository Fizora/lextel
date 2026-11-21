import { LangCode } from "@/app/context/LangaugeContext";

export interface CtaContent {
  label: string;
  href: string;
}
export interface KpiCard {
  label: string;
  value: string;
  delta: string;
}
export interface Feature {
  key: string;
  label: string;
}
export interface ChartPoint {
  label: string;
  value: number;
  color?: string;
}

export interface OverviewModule {
  features: Feature[];
  title: string;
  subtitle: string;
  kpi: { revenue: KpiCard; transactions: KpiCard; critical: KpiCard };
  tasks: {
    title: string;
    progressTemplate: string;
    doneLabel: string;
    pendingLabel: string;
    items: string[];
  };
  reports: { name: string; period: string; value: string; status: string }[];
}

export interface InventoryModule {
  features: Feature[];
  title: string;
  subtitle: string;
  badge: string;
  table: {
    product: string;
    price: string;
    stock: string;
    status: string;
    action: string;
  };
  statusLabels: { safe: string; low: string; critical: string };
  restockButton: string;
  items: {
    sku: string;
    name: string;
    stock: number;
    minStock: number;
    price: string;
  }[];
  warehouses: {
    name: string;
    location: string;
    items: number;
    capacity: number;
  }[];
}

export interface AccountingModule {
  features: Feature[];
  title: string;
  subtitle: string;
  balanceLabel: string;
  balanceValue: string;
  entries: {
    code: string;
    description: string;
    type: "in" | "out";
    amount: string;
    time: string;
  }[];
}

export interface PurchasingModule {
  features: Feature[];
  title: string;
  subtitle: string;
  badge: string;
  contractActive: string;
  leadTime: string;
  newPo: string;
  vendors: { name: string; category: string; leadTime: string }[];
  orders: { code: string; vendor: string; total: string; status: string }[];
}

export interface DashboardCharts {
  revenueTrend: { labels: string[]; values: number[] };
  cashInflow: { labels: string[]; values: number[] };
  cashOutflow: { labels: string[]; values: number[] };
  salesByCategory: ChartPoint[];
  stockByProduct: ChartPoint[];
  vendorSpend: ChartPoint[];
  journalBalance: { labels: string[]; values: number[] };
  orderVolume: ChartPoint[];
}

export interface DashboardContent {
  brand: string;
  tagline: string;
  appNav: {
    overview: string;
    inventory: string;
    accounting: string;
    purchasing: string;
  };
  user: { name: string; initials: string };
  status: { synced: string; server: string };
  breadcrumb: { home: string };
  sidebar: {
    sectionMain: string;
    sectionBranch: string;
    branches: { label: string; main: string; mall: string; shift: string };
    footer: string;
    poweredBy: string;
  };
  charts: DashboardCharts;
  modules: {
    overview: OverviewModule;
    inventory: InventoryModule;
    accounting: AccountingModule;
    purchasing: PurchasingModule;
  };
}

export interface HeroContent {
  badge: string;
  titleMain: string;
  titleHighlight: string;
  description: string;
  primaryCta: CtaContent;
  secondaryCta: CtaContent;
  dashboard: DashboardContent;
}

const CHART_COLORS = ["#DC2626", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"];

export const heroContentByLang: Record<LangCode, HeroContent> = {
  en: {
    badge: "Custom Operational Systems & Software",
    titleMain: "Systems that work.",
    titleHighlight: "Without the bureaucracy.",
    description:
      "We build operational software designed to match how your institution works—fast, clear, and directly with the builders.",
    primaryCta: {
      label: "Build Your System",
      href: "mailto:info@lexentify.com",
    },
    secondaryCta: { label: "Explore Services", href: "/#services" },
    dashboard: {
      brand: "Summit Retail",
      tagline: "Retail Operations Suite",
      appNav: {
        overview: "Dashboard",
        inventory: "Inventory",
        accounting: "Accounting",
        purchasing: "Purchasing",
      },
      user: { name: "Alex Morgan", initials: "AM" },
      status: { synced: "POS Synced", server: "Server OK" },
      breadcrumb: { home: "Home" },
      sidebar: {
        sectionMain: "MAIN MENU",
        sectionBranch: "BRANCHES",
        branches: {
          label: "Branches & POS",
          main: "Main Branch Cashier",
          mall: "Mall Branch Cashier",
          shift: "Shift Reconciliation",
        },
        footer: "Cluster Active",
        poweredBy: "powered by lextel",
      },
      charts: {
        revenueTrend: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [38.2, 41.5, 39.8, 44.1, 42.9, 46.3, 42.85],
        },
        cashInflow: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [12.4, 15.2, 13.1, 18.6, 17.2, 20.4, 19.1],
        },
        cashOutflow: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [8.1, 9.4, 10.2, 11.8, 9.6, 12.1, 10.4],
        },
        salesByCategory: [
          { label: "Groceries", value: 42.5, color: CHART_COLORS[0] },
          { label: "Beverages", value: 28.3, color: CHART_COLORS[1] },
          { label: "Snacks", value: 18.7, color: CHART_COLORS[2] },
          { label: "Household", value: 10.5, color: CHART_COLORS[3] },
        ],
        stockByProduct: [
          { label: "Oil", value: 142 },
          { label: "Rice", value: 18 },
          { label: "Sugar", value: 210 },
          { label: "Milk", value: 9 },
        ],
        vendorSpend: [
          { label: "Sembako Makmur", value: 12.4, color: CHART_COLORS[0] },
          { label: "Indofood", value: 8.6, color: CHART_COLORS[1] },
          { label: "Mayora", value: 4.2, color: CHART_COLORS[2] },
        ],
        journalBalance: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          values: [150, 165, 158, 172, 168, 180, 184.25],
        },
        orderVolume: [
          { label: "PO-2037", value: 3.8 },
          { label: "PO-2038", value: 5.2 },
          { label: "PO-2039", value: 4.2 },
          { label: "PO-2040", value: 8.6 },
          { label: "PO-2041", value: 12.4 },
        ],
      },
      modules: {
        overview: {
          features: [
            { key: "overview", label: "Overview" },
            { key: "analytics", label: "Analytics" },
            { key: "reports", label: "Reports" },
          ],
          title: "Executive Overview",
          subtitle: "Real-time performance across all stores",
          kpi: {
            revenue: {
              label: "Today's Revenue",
              value: "Rp 42.85M",
              delta: "+18.4% vs yesterday",
            },
            transactions: {
              label: "POS Transactions",
              value: "342 receipts",
              delta: "All settled",
            },
            critical: {
              label: "Critical Stock",
              value: "2 items",
              delta: "Needs restock",
            },
          },
          tasks: {
            title: "Approval Queue",
            progressTemplate: "{done} of {total} completed",
            doneLabel: "Done",
            pendingLabel: "In progress",
            items: [
              "Validate daily cashier reconciliation & BCA EDC",
              "Approve Purchase Order (PO) for East Branch supplier",
              "Audit physical stock opname for priority warehouse",
              "Sync VAT & e-Invoice mutation",
            ],
          },
          reports: [
            {
              name: "Monthly Sales Report",
              period: "Nov 2026",
              value: "Rp 412M",
              status: "Final",
            },
            {
              name: "Inventory Valuation",
              period: "Nov 2026",
              value: "Rp 218M",
              status: "Draft",
            },
            {
              name: "Cash Flow Summary",
              period: "Week 46",
              value: "Rp 88M",
              status: "Final",
            },
            {
              name: "Vendor Aging Report",
              period: "Nov 2026",
              value: "Rp 34M",
              status: "Final",
            },
          ],
        },
        inventory: {
          features: [
            { key: "products", label: "Products" },
            { key: "lowstock", label: "Low Stock" },
            { key: "warehouses", label: "Warehouses" },
          ],
          title: "Stock & Warehouse",
          subtitle: "Manage inventory across central and branch warehouses",
          badge: "Main Warehouse — Central",
          table: {
            product: "Product & SKU",
            price: "Price",
            stock: "Stock",
            status: "Status",
            action: "Quick Action",
          },
          statusLabels: { safe: "In stock", low: "Low", critical: "Critical" },
          restockButton: "+ Restock 50",
          items: [
            {
              sku: "SKU-9012",
              name: "Premium Cooking Oil 2L",
              stock: 142,
              minStock: 50,
              price: "Rp 38,500",
            },
            {
              sku: "SKU-4421",
              name: "Sentra Ramos Rice 5kg",
              stock: 18,
              minStock: 25,
              price: "Rp 69,000",
            },
            {
              sku: "SKU-8834",
              name: "Crystal Sugar 1kg",
              stock: 210,
              minStock: 40,
              price: "Rp 17,500",
            },
            {
              sku: "SKU-1192",
              name: "UHT Full Cream Milk 1L",
              stock: 9,
              minStock: 30,
              price: "Rp 21,000",
            },
          ],
          warehouses: [
            {
              name: "Central Warehouse",
              location: "Jakarta",
              items: 1240,
              capacity: 1800,
            },
            {
              name: "East Branch",
              location: "Surabaya",
              items: 620,
              capacity: 900,
            },
            {
              name: "Mall Outlet",
              location: "Bandung",
              items: 340,
              capacity: 500,
            },
          ],
        },
        accounting: {
          features: [
            { key: "journal", label: "Journal" },
            { key: "cashflow", label: "Cash Flow" },
          ],
          title: "Cash Journal",
          subtitle: "Auto-reconciled cash mutations synced with POS & bank",
          balanceLabel: "Cash Balance",
          balanceValue: "Rp 184,250,000",
          entries: [
            {
              code: "TRX-8821",
              description: "POS sales Main Branch (Morning shift)",
              type: "in",
              amount: "+Rp 14,850,000",
              time: "Just now",
            },
            {
              code: "TRX-8820",
              description: "Warehouse restock (Supplier A)",
              type: "out",
              amount: "-Rp 8,400,000",
              time: "12 min ago",
            },
            {
              code: "TRX-8819",
              description: "Store utilities & electricity",
              type: "out",
              amount: "-Rp 1,250,000",
              time: "1 hour ago",
            },
            {
              code: "TRX-8818",
              description: "Online order settlement (Marketplace)",
              type: "in",
              amount: "+Rp 5,320,000",
              time: "2 hours ago",
            },
          ],
        },
        purchasing: {
          features: [
            { key: "vendors", label: "Vendors" },
            { key: "orders", label: "Purchase Orders" },
          ],
          title: "Purchase Orders",
          subtitle: "Automated ordering to registered distributors",
          badge: "4 Active Vendors",
          contractActive: "Active Contract",
          leadTime: "Lead time:",
          newPo: "Create PO →",
          vendors: [
            {
              name: "PT Sembako Makmur Jaya",
              category: "Staples & rice",
              leadTime: "1 day",
            },
            {
              name: "PT Indofood Sukses Makmur",
              category: "Packaged consumer goods",
              leadTime: "2 days",
            },
            {
              name: "PT Mayora Indah",
              category: "Beverages & snacks",
              leadTime: "3 days",
            },
          ],
          orders: [
            {
              code: "PO-2041",
              vendor: "PT Sembako Makmur Jaya",
              total: "Rp 12.4M",
              status: "Approved",
            },
            {
              code: "PO-2040",
              vendor: "PT Indofood Sukses Makmur",
              total: "Rp 8.6M",
              status: "Pending",
            },
            {
              code: "PO-2039",
              vendor: "PT Mayora Indah",
              total: "Rp 4.2M",
              status: "Approved",
            },
          ],
        },
      },
    },
  },
  id: {
    badge: "Sistem Operasional & Software Kustom",
    titleMain: "Sistem yang bekerja.",
    titleHighlight: "Tanpa birokrasi.",
    description:
      "Kami membangun perangkat lunak operasional yang dirancang sesuai cara institusi Anda bekerja—cepat, jelas, dan langsung bersama pembuatnya.",
    primaryCta: {
      label: "Ceritakan Kebutuhan Anda",
      href: "mailto:info@lexentify.com",
    },
    secondaryCta: { label: "Jelajahi Layanan", href: "/#services" },
    dashboard: {
      brand: "Summit Retail",
      tagline: "Suite Operasional Retail",
      appNav: {
        overview: "Dasbor",
        inventory: "Inventori",
        accounting: "Akuntansi",
        purchasing: "Pengadaan",
      },
      user: { name: "Alex Morgan", initials: "AM" },
      status: { synced: "POS Sinkron", server: "Server OK" },
      breadcrumb: { home: "Beranda" },
      sidebar: {
        sectionMain: "MENU UTAMA",
        sectionBranch: "CABANG",
        branches: {
          label: "Cabang & POS",
          main: "Kasir Cabang Utama",
          mall: "Kasir Cabang Mall",
          shift: "Rekonsiliasi Shift",
        },
        footer: "Cluster Aktif",
        poweredBy: "powered by lextel",
      },
      charts: {
        revenueTrend: {
          labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
          values: [38.2, 41.5, 39.8, 44.1, 42.9, 46.3, 42.85],
        },
        cashInflow: {
          labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
          values: [12.4, 15.2, 13.1, 18.6, 17.2, 20.4, 19.1],
        },
        cashOutflow: {
          labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
          values: [8.1, 9.4, 10.2, 11.8, 9.6, 12.1, 10.4],
        },
        salesByCategory: [
          { label: "Sembako", value: 42.5, color: CHART_COLORS[0] },
          { label: "Minuman", value: 28.3, color: CHART_COLORS[1] },
          { label: "Cemilan", value: 18.7, color: CHART_COLORS[2] },
          { label: "Rumah Tangga", value: 10.5, color: CHART_COLORS[3] },
        ],
        stockByProduct: [
          { label: "Minyak", value: 142 },
          { label: "Beras", value: 18 },
          { label: "Gula", value: 210 },
          { label: "Susu", value: 9 },
        ],
        vendorSpend: [
          { label: "Sembako Makmur", value: 12.4, color: CHART_COLORS[0] },
          { label: "Indofood", value: 8.6, color: CHART_COLORS[1] },
          { label: "Mayora", value: 4.2, color: CHART_COLORS[2] },
        ],
        journalBalance: {
          labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
          values: [150, 165, 158, 172, 168, 180, 184.25],
        },
        orderVolume: [
          { label: "PO-2037", value: 3.8 },
          { label: "PO-2038", value: 5.2 },
          { label: "PO-2039", value: 4.2 },
          { label: "PO-2040", value: 8.6 },
          { label: "PO-2041", value: 12.4 },
        ],
      },
      modules: {
        overview: {
          features: [
            { key: "overview", label: "Ringkasan" },
            { key: "analytics", label: "Analitik" },
            { key: "reports", label: "Laporan" },
          ],
          title: "Ringkasan Eksekutif",
          subtitle: "Performa real-time seluruh cabang",
          kpi: {
            revenue: {
              label: "Omset Hari Ini",
              value: "Rp 42,85jt",
              delta: "+18,4% dari kemarin",
            },
            transactions: {
              label: "Transaksi POS",
              value: "342 struk",
              delta: "Semua lunas",
            },
            critical: {
              label: "Stok Kritis",
              value: "2 produk",
              delta: "Perlu restock",
            },
          },
          tasks: {
            title: "Antrean Persetujuan",
            progressTemplate: "{done} dari {total} selesai",
            doneLabel: "Selesai",
            pendingLabel: "Proses",
            items: [
              "Validasi rekonsiliasi kasir harian & EDC BCA",
              "Persetujuan Purchase Order (PO) supplier Cabang Timur",
              "Audit opname fisik stok gudang prioritas",
              "Sinkronisasi mutasi pajak PPN & e-Faktur",
            ],
          },
          reports: [
            {
              name: "Laporan Penjualan Bulanan",
              period: "Nov 2026",
              value: "Rp 412jt",
              status: "Final",
            },
            {
              name: "Valuasi Inventori",
              period: "Nov 2026",
              value: "Rp 218jt",
              status: "Draf",
            },
            {
              name: "Ringkasan Arus Kas",
              period: "Minggu 46",
              value: "Rp 88jt",
              status: "Final",
            },
            {
              name: "Laporan Aging Vendor",
              period: "Nov 2026",
              value: "Rp 34jt",
              status: "Final",
            },
          ],
        },
        inventory: {
          features: [
            { key: "products", label: "Produk" },
            { key: "lowstock", label: "Stok Rendah" },
            { key: "warehouses", label: "Gudang" },
          ],
          title: "Stok & Gudang",
          subtitle: "Kelola inventori pusat dan cabang dalam satu panel",
          badge: "Gudang Utama — Pusat",
          table: {
            product: "Produk & SKU",
            price: "Harga",
            stock: "Stok",
            status: "Status",
            action: "Aksi Cepat",
          },
          statusLabels: { safe: "Aman", low: "Menipis", critical: "Kritis" },
          restockButton: "+ Restock 50",
          items: [
            {
              sku: "SKU-9012",
              name: "Minyak Goreng Premium 2L",
              stock: 142,
              minStock: 50,
              price: "Rp 38.500",
            },
            {
              sku: "SKU-4421",
              name: "Beras Sentra Ramos 5kg",
              stock: 18,
              minStock: 25,
              price: "Rp 69.000",
            },
            {
              sku: "SKU-8834",
              name: "Gula Pasir Kristal 1kg",
              stock: 210,
              minStock: 40,
              price: "Rp 17.500",
            },
            {
              sku: "SKU-1192",
              name: "Susu UHT Full Cream 1L",
              stock: 9,
              minStock: 30,
              price: "Rp 21.000",
            },
          ],
          warehouses: [
            {
              name: "Gudang Pusat",
              location: "Jakarta",
              items: 1240,
              capacity: 1800,
            },
            {
              name: "Cabang Timur",
              location: "Surabaya",
              items: 620,
              capacity: 900,
            },
            {
              name: "Outlet Mall",
              location: "Bandung",
              items: 340,
              capacity: 500,
            },
          ],
        },
        accounting: {
          features: [
            { key: "journal", label: "Jurnal" },
            { key: "cashflow", label: "Arus Kas" },
          ],
          title: "Jurnal Kas",
          subtitle: "Mutasi kas otomatis tersinkron dengan POS & bank",
          balanceLabel: "Saldo Kas",
          balanceValue: "Rp 184.250.000",
          entries: [
            {
              code: "TRX-8821",
              description: "Penjualan POS Cabang Utama (Shift Pagi)",
              type: "in",
              amount: "+Rp 14.850.000",
              time: "Baru saja",
            },
            {
              code: "TRX-8820",
              description: "Restock Gudang Pusat (Supplier A)",
              type: "out",
              amount: "-Rp 8.400.000",
              time: "12 menit lalu",
            },
            {
              code: "TRX-8819",
              description: "Pembayaran utilitas & listrik toko",
              type: "out",
              amount: "-Rp 1.250.000",
              time: "1 jam lalu",
            },
            {
              code: "TRX-8818",
              description: "Penyelesaian pesanan online (Marketplace)",
              type: "in",
              amount: "+Rp 5.320.000",
              time: "2 jam lalu",
            },
          ],
        },
        purchasing: {
          features: [
            { key: "vendors", label: "Vendor" },
            { key: "orders", label: "Purchase Order" },
          ],
          title: "Purchase Order",
          subtitle: "Pemesanan otomatis ke distributor terdaftar",
          badge: "4 Vendor Aktif",
          contractActive: "Kontrak Aktif",
          leadTime: "Lead time:",
          newPo: "Buat PO →",
          vendors: [
            {
              name: "PT Sembako Makmur Jaya",
              category: "Sembako & beras",
              leadTime: "1 hari",
            },
            {
              name: "PT Indofood Sukses Makmur",
              category: "Barang konsumsi kemasan",
              leadTime: "2 hari",
            },
            {
              name: "PT Mayora Indah",
              category: "Minuman & cemilan",
              leadTime: "3 hari",
            },
          ],
          orders: [
            {
              code: "PO-2041",
              vendor: "PT Sembako Makmur Jaya",
              total: "Rp 12,4jt",
              status: "Disetujui",
            },
            {
              code: "PO-2040",
              vendor: "PT Indofood Sukses Makmur",
              total: "Rp 8,6jt",
              status: "Menunggu",
            },
            {
              code: "PO-2039",
              vendor: "PT Mayora Indah",
              total: "Rp 4,2jt",
              status: "Disetujui",
            },
          ],
        },
      },
    },
  },
};
