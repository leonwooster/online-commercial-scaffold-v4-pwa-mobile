import type { AppUser, Branch, CustomerOrder, FactoryOrder, KPI, Product, ProductStock, Promotion } from '@/lib/types'

export const currentUser = {
  name: 'Leon',
  role: 'admin' as const,
}

export const branches: Branch[] = [
  { id: 'hq', name: 'HQ Warehouse', city: 'Kuala Lumpur', manager: 'Aina' },
  { id: 'pj', name: 'Petaling Jaya', city: 'Petaling Jaya', manager: 'Hafiz' },
  { id: 'jb', name: 'Johor Bahru', city: 'Johor Bahru', manager: 'Siti' },
  { id: 'pg', name: 'Penang', city: 'George Town', manager: 'Raymond' },
]

export const dashboardKpis: KPI[] = [
  { title: 'Monthly Revenue', value: 'MYR 428,000', delta: '+12.4%', trend: 'up' },
  { title: 'Gross Profit', value: 'MYR 119,000', delta: '+6.8%', trend: 'up' },
  { title: 'Orders This Month', value: '1,284', delta: '+9.1%', trend: 'up' },
  { title: 'Low Stock Alerts', value: '14', delta: '-3 items', trend: 'down' },
]

export const products: Product[] = [
  { sku: 'TYR-001', name: 'Performance Tyre A1', category: 'Passenger', supplier: 'Michel Supplier', price: 350, totalStock: 420, reorderPoint: 120, branchAvailability: ['hq', 'pj', 'jb'], status: 'healthy' },
  { sku: 'TYR-002', name: 'Commercial Tyre B2', category: 'Truck', supplier: 'Bridgestone Supplier', price: 780, totalStock: 38, reorderPoint: 80, branchAvailability: ['hq', 'jb'], status: 'low' },
  { sku: 'TYR-003', name: 'SUV Tyre C7', category: 'SUV', supplier: 'Goodyear Supplier', price: 520, totalStock: 610, reorderPoint: 150, branchAvailability: ['hq', 'pj', 'pg'], status: 'overstock' },
  { sku: 'TYR-004', name: 'All Weather D4', category: 'Passenger', supplier: 'Continental Supplier', price: 420, totalStock: 192, reorderPoint: 90, branchAvailability: ['hq', 'pj', 'jb', 'pg'], status: 'healthy' },
]

export const stock: ProductStock[] = products.map(({ sku, name, category, supplier, totalStock, status }) => ({
  sku,
  name,
  category,
  supplier,
  totalStock,
  status,
}))

export const users: AppUser[] = [
  { id: 'USR-001', name: 'Aina Rahman', email: 'aina@company.com', role: 'admin', status: 'active' },
  { id: 'USR-002', name: 'Hafiz Razak', email: 'hafiz@company.com', role: 'branch', branchId: 'pj', status: 'active' },
  { id: 'USR-003', name: 'Siti Aminah', email: 'siti@company.com', role: 'branch', branchId: 'jb', status: 'active' },
  { id: 'USR-004', name: 'Tan Auto', email: 'procurement@tanauto.com', role: 'dealer', branchId: 'pj', status: 'active' },
  { id: 'USR-005', name: 'Michel Supplier', email: 'ops@michelsupplier.com', role: 'supplier', status: 'pending' },
  { id: 'USR-006', name: 'Lee Customer', email: 'lee@email.com', role: 'customer', branchId: 'pg', status: 'inactive' },
]

export const bestSellers = [
  { name: 'Performance Tyre A1', units: 420, branch: 'Petaling Jaya' },
  { name: 'SUV Tyre C7', units: 381, branch: 'Johor Bahru' },
  { name: 'All Weather D4', units: 288, branch: 'Penang' },
]

export const factoryOrders: FactoryOrder[] = [
  { id: 'FO-10021', supplier: 'Michel Supplier', branchId: 'hq', amount: 54000, status: 'In Production', requestedDate: '2026-03-10', expectedDate: '2026-03-28' },
  { id: 'FO-10022', supplier: 'Goodyear Supplier', branchId: 'pj', amount: 88000, status: 'Shipped', requestedDate: '2026-03-08', expectedDate: '2026-03-26' },
  { id: 'FO-10023', supplier: 'Continental Supplier', branchId: 'jb', amount: 32000, status: 'Pending Approval', requestedDate: '2026-03-18', expectedDate: '2026-04-02' },
]

export const customerOrders: CustomerOrder[] = [
  { id: 'CO-20011', customer: 'Tan Auto', branch: 'Petaling Jaya', amount: 3800, status: 'Paid', placedDate: '2026-03-20' },
  { id: 'CO-20012', customer: 'Johor Fleet', branch: 'Johor Bahru', amount: 11200, status: 'Awaiting Payment', placedDate: '2026-03-21' },
  { id: 'CO-20013', customer: 'Lim Brothers', branch: 'Penang', amount: 6400, status: 'Packed', placedDate: '2026-03-22' },
]

export const promotions: Promotion[] = [
  { id: 'PR-001', name: 'Raya Fleet Discount', type: 'Branch Promo', branches: 'All branches', period: '1 Apr - 30 Apr', status: 'Active' },
  { id: 'PR-002', name: 'Weekend Tyre Bundle', type: 'Customer Promo', branches: 'PJ, Penang', period: 'Fri - Sun', status: 'Draft' },
  { id: 'PR-003', name: 'Loyalty Bonus 3x', type: 'Loyalty Campaign', branches: 'Johor Bahru', period: '15 Apr - 30 Apr', status: 'Expired' },
]

export const loyaltySummary = {
  activeMembers: 2480,
  pointsIssued: 148000,
  pointsRedeemed: 62300,
}

export function getBranchName(branchId?: string) {
  return branches.find((branch) => branch.id === branchId)?.name ?? 'Unassigned'
}

export function getProduct(sku: string) {
  return products.find((product) => product.sku === sku)
}

export function getUser(id: string) {
  return users.find((user) => user.id === id)
}

export function getFactoryOrder(id: string) {
  return factoryOrders.find((order) => order.id === id)
}

export function getPromotion(id: string) {
  return promotions.find((promotion) => promotion.id === id)
}
