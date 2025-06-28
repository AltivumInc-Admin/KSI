# Feature Documentation

## Table of Contents
1. [Evidence Requirements System](#evidence-requirements-system)
2. [Audit Log System](#audit-log-system)
3. [Document Management](#document-management)
4. [Progress Tracking](#progress-tracking)
5. [Export Capabilities](#export-capabilities)
6. [Dark Theme UI](#dark-theme-ui)

---

## Evidence Requirements System

### Overview
Each KSI can now specify exactly what evidence is needed for FedRAMP assessment, how to collect it, and where to store it.

### Data Structure
```typescript
interface EvidenceRequirement {
  type: string;              // "AWS Config Report", "Policy Document", etc.
  collectionMethod: string;  // "Automated - AWS Audit Manager", "Manual - Screenshot"
  repository: string;        // "S3://fedramp-evidence/config/", "GRC Vault"
  description?: string;      // Additional context
}
```

### Enhanced KSIs
Currently, 11 key KSIs have been enhanced with detailed evidence requirements:

#### Network Security (CNA-01)
- AWS Config Conformance Pack Reports
- VPC Flow Logs Analysis
- Network Architecture Diagrams

#### Infrastructure as Code (CNA-04)
- Static Analysis Reports (Checkov/tfsec)
- Service Control Policies
- Terraform State Files

#### Encryption (SVC-03, SVC-06)
- KMS Key Policies
- FIPS 140-2 Certificates
- Key Rotation Reports
- Certificate Automation Logs

#### Identity Management (IAM-01, IAM-05)
- MFA Enforcement Policies
- FIDO2 Registration Reports
- Zero Trust Architecture Documentation
- Device Trust Policies

#### Monitoring (MLA-01, MLA-03)
- SIEM Coverage Matrix
- Log Immutability Configuration
- Vulnerability Response SLAs
- Automated Remediation Playbooks

#### Recovery (RPL-03, RPL-04)
- Backup Configuration Documentation
- Immutable Backup Proof
- DR Test Results
- Chaos Engineering Reports

### Success Metrics
Each enhanced KSI includes specific, measurable criteria:
- **Time-based**: "Critical vulnerabilities remediated within 24 hours"
- **Percentage-based**: ">95% of systems have logs collected"
- **Absolute**: "Zero SMS/voice MFA methods active"

### Continuous Monitoring Indicators
Visual badges show which KSIs require ongoing validation vs. point-in-time assessment.

---

## Audit Log System

### Overview
Comprehensive change tracking for compliance and accountability.

### Tracked Events
1. **Status Changes**
   - Old and new values recorded
   - Timestamp and user (future feature)
   
2. **Checklist Updates**
   - Items checked/unchecked
   - Completion percentage

3. **Evidence Updates**
   - Text modifications
   - Note when evidence was last updated

4. **Document Management**
   - File uploads with names
   - File removals
   - Metadata preserved

### Features
- **Filtering**: By event type or KSI category
- **Time Display**: Relative ("2 hours ago") and absolute timestamps
- **Export**: CSV format for compliance records
- **Immutability**: Cannot be edited, only cleared with confirmation

### Usage
The audit log is collapsible to save screen space. Click the header to expand/collapse.

---

## Document Management

### Overview
Attach evidence files directly to each KSI item.

### Supported Formats
- Documents: PDF, DOC, DOCX, TXT
- Images: PNG, JPG, JPEG
- Data: CSV, XLSX, JSON

### Technical Implementation
- Files are base64 encoded for browser storage
- No file size limit (browser localStorage permitting)
- Files persist across sessions
- Download original files anytime

### Security Considerations
- All files stored locally in browser
- No server uploads
- No external dependencies
- Files encrypted if browser supports

---

## Progress Tracking

### Dashboard Metrics
1. **Overall Progress**
   - Percentage complete with visual progress bar
   - Total KSIs vs. completed

2. **Category Breakdown**
   - Per-category completion
   - Expandable/collapsible sections
   - Color-coded status

3. **Critical Path Items**
   - Highlights high-priority incomplete KSIs
   - Based on FedRAMP Phase 1 requirements

### Status Levels
- **Not Started** (Gray)
- **In Progress** (Amber)
- **Complete** (Emerald)

### Visual Indicators
- Progress bars with smooth animations
- Color-coded status badges
- Checkbox states persist
- Real-time updates

---

## Export Capabilities

### Progress Report (Markdown)
Generates comprehensive `.md` file including:
- Executive summary with statistics
- Category-by-category breakdown
- Evidence status for each KSI
- Document attachments list
- Evidence requirements
- Success metrics
- NIST control mappings

### Data Export (JSON)
Complete application state including:
- All KSI statuses
- Evidence text
- Document metadata (not file content)
- Checklist states
- Custom notes

### Audit Log Export (CSV)
Compliance-ready format with:
- Timestamps
- Event types
- Old/new values
- User tracking (when implemented)
- Sortable/filterable in Excel

### Use Cases
- Share progress with stakeholders
- Backup before major updates
- Migrate between devices
- Archive for compliance

---

## Dark Theme UI

### Design Philosophy
- Reduce eye strain during extended use
- Professional appearance for demos
- Consistent color palette
- High contrast for readability

### Color Palette
```css
Background: slate-900 (#0f172a)
Cards: slate-800 (#1e293b)
Borders: slate-700 (#334155)
Text Primary: slate-100 (#f1f5f9)
Text Secondary: slate-400 (#94a3b8)
Success: emerald-400 (#34d399)
Warning: amber-400 (#fbbf24)
Info: blue-400 (#60a5fa)
```

### Accessibility
- WCAG AA compliant contrast ratios
- Focus indicators preserved
- Semantic color usage
- Readable font sizes

---

## Implementation Notes

### Local Storage Structure
```javascript
{
  "fedramp-ksi-data": {/* Main KSI data */},
  "fedramp-ksi-audit-log": [/* Audit entries */]
}
```

### Performance Considerations
- Lazy loading for large documents
- Efficient re-renders with React
- Debounced saves
- Optimized for 1000+ audit entries

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Future Enhancements
1. **Multi-user Support**
   - User attribution in audit log
   - Role-based permissions
   - Collaborative editing

2. **API Integration**
   - AWS Audit Manager
   - Jira/ServiceNow
   - Automated evidence collection

3. **Advanced Reporting**
   - PDF generation
   - Custom templates
   - Scheduled reports

---

For technical questions or feature requests, please open an issue on GitHub.