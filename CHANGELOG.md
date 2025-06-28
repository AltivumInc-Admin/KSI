# Changelog

All notable changes to the FedRAMP 20x KSI Compliance Tracker will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-12-28

### Added
- **Evidence Requirements Management** - Comprehensive evidence tracking for each KSI
  - Evidence type specification
  - Collection method tracking (Automated vs Manual)
  - Repository location documentation
  - Detailed description fields
- **Success Metrics** - Measurable criteria with specific thresholds for each KSI
  - Time-based SLAs (e.g., 24-48 hour remediation)
  - Coverage percentages (e.g., >95% log collection)
  - Compliance thresholds
- **NIST Control Mapping** - Reference fields for 800-53 control alignment
- **Continuous Monitoring Indicators** - Visual indicators for KSIs requiring ongoing validation
- **Enhanced Evidence Templates** - Pre-populated requirements for key KSIs based on 3PAO expectations
- **Audit Log Enhancements** - More detailed change tracking
- **Export Improvements** - Reports now include evidence requirements and success metrics

### Changed
- **UI Theme** - Complete dark theme overhaul
  - Slate color palette for reduced eye strain
  - Improved contrast ratios
  - Muted accent colors (emerald, amber)
  - Consistent color scheme throughout
- **Progress Reports** - Now include comprehensive evidence and metrics data
- **Data Structure** - Extended to support new evidence and compliance fields

### Enhanced KSIs
- **CNA-01**: AWS Config conformance pack requirements
- **CNA-04**: Infrastructure-as-code guardrails
- **SVC-03**: FIPS 140-2 validation requirements
- **SVC-06**: Key rotation frequency specifications
- **IAM-01**: Phishing-resistant MFA requirements
- **IAM-05**: Zero trust architecture components
- **MLA-01**: Log immutability and coverage metrics
- **MLA-03**: Vulnerability remediation SLAs
- **RPL-03**: 3-2-1 backup strategy requirements
- **RPL-04**: Chaos engineering and RTO/RPO metrics

## [1.1.0] - 2024-12-27

### Added
- **Document Upload** - Attach evidence files to each KSI
  - Support for PDF, DOC, DOCX, TXT, PNG, JPG, CSV, XLSX, JSON
  - Base64 encoding for browser storage
  - Download functionality
- **Comprehensive Audit Log** - Track all changes automatically
  - Status changes
  - Checklist updates
  - Evidence modifications
  - Document management
  - CSV export capability
- **Audit Filtering** - Filter by event type and category
- **Collapsible UI Elements** - Better space management

### Fixed
- Checkbox click functionality
- Status dropdown styling in dark mode

## [1.0.0] - 2024-12-26

### Initial Release
- 52 FedRAMP 20x KSI requirements
- Interactive checklist system
- Progress tracking dashboard
- Local storage persistence
- Evidence text fields
- Status management (Not Started, In Progress, Complete)
- Progress report generation (Markdown)
- Data export/import (JSON)
- Category-based organization
- Real-time save notifications

## Upgrade Notes

### From 1.x to 2.0
- Existing data is preserved and enhanced with new fields
- Evidence requirements are added to select KSIs automatically
- Dark theme is applied by default
- No manual migration required - the app handles it automatically

---

For detailed feature documentation, see [FEATURES.md](FEATURES.md)