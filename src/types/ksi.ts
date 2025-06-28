export type CompletionStatus = 'not_started' | 'in_progress' | 'complete';

export interface Document {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: string;
  data: string; // Base64 encoded file data
}

export interface EvidenceRequirement {
  type: string; // e.g., "AWS Config Report", "Policy Document", "Test Results"
  collectionMethod: string; // e.g., "Automated - AWS Audit Manager", "Manual - Screenshot"
  repository: string; // e.g., "S3://fedramp-evidence/config/", "GRC Vault"
  description?: string;
}

export interface KSIItem {
  id: string;
  code: string;
  title: string;
  checklist: string[];
  status: CompletionStatus;
  evidence: string;
  completedItems: boolean[];
  documents?: Document[];
  evidenceRequirements?: EvidenceRequirement[];
  successMetrics?: string[];
  continuousMonitoring?: boolean;
  nistControls?: string[]; // For manual mapping
  notes?: string; // For additional context
}

export interface KSICategory {
  id: string;
  code: string;
  name: string;
  objective: string;
  items: KSIItem[];
}

export interface KSIData {
  version: string;
  effectiveDate: string;
  impactLevel: string;
  categories: KSICategory[];
}

export interface ImplementationPhase {
  phase: number;
  name: string;
  weeks: string;
  items: string[];
}

export type AuditEventType = 
  | 'status_changed'
  | 'checklist_updated'
  | 'evidence_updated'
  | 'document_added'
  | 'document_removed';

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  eventType: AuditEventType;
  itemCode: string;
  itemTitle: string;
  categoryCode: string;
  field?: string;
  oldValue?: string;
  newValue?: string;
  details?: string;
  user?: string; // For future multi-user support
}