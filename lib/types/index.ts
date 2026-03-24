export type UserRole = 'admin' | 'branch' | 'dealer' | 'supplier' | 'customer'

export interface Branch {
  id: string
  name: string
  city: string
  manager: string
}

export interface ProductStock {
  sku: string
  name: string
  category: string
  supplier: string
  totalStock: number
  status: 'healthy' | 'low' | 'overstock'
}

export interface KPI {
  title: string
  value: string
  delta: string
  trend: 'up' | 'down' | 'neutral'
}

export interface AppUser {
  id: string
  name: string
  email: string
  role: UserRole
  branchId?: string
  status: 'active' | 'inactive' | 'pending'
}

export interface Product {
  sku: string
  name: string
  category: string
  supplier: string
  price: number
  totalStock: number
  reorderPoint: number
  branchAvailability: string[]
  status: 'healthy' | 'low' | 'overstock'
}

export interface FactoryOrder {
  id: string
  supplier: string
  branchId: string
  amount: number
  status: 'Draft' | 'Pending Approval' | 'In Production' | 'Shipped' | 'Received'
  requestedDate: string
  expectedDate: string
}

export interface CustomerOrder {
  id: string
  customer: string
  branch: string
  amount: number
  status: 'Draft' | 'Awaiting Payment' | 'Paid' | 'Packed' | 'Delivered'
  placedDate: string
}

export interface Promotion {
  id: string
  name: string
  type: 'Branch Promo' | 'Customer Promo' | 'Loyalty Campaign'
  branches: string
  period: string
  status: 'Draft' | 'Active' | 'Expired'
}
