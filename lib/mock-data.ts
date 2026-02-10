export const inspectionStatuses = [
  'Approved',
  'Conditional',
  'Pending',
  'Rejected',
  'Scheduled',
] as const

export const equipment = [
  'Hydraulic Press A',
  'Conveyor Belt B',
  'Pneumatic System C',
  'Electric Motor D',
  'Turbine E',
  'Compressor F',
  'Pump G',
  'Transformer H',
  'Gearbox I',
  'Boiler J',
]

export const inspectionTypes = [
  'Annual Inspection',
  'Quarterly Check',
  'Maintenance',
  'Safety Check',
  'Certification',
  'Emergency Inspection',
  'Preventive Maintenance',
  'Compliance Review',
]

export const facilities = [
  'Facility A - Main Production',
  'Facility B - Assembly Line',
  'Facility C - Testing Lab',
]

export type InspectionStatus = (typeof inspectionStatuses)[number]
