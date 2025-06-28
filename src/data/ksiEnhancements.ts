import { EvidenceRequirement } from '../types/ksi';

// Enhanced evidence requirements and success metrics for key KSIs
// Based on FedRAMP 20x assessment recommendations

export const ksiEnhancements: Record<string, {
  evidenceRequirements: EvidenceRequirement[];
  successMetrics: string[];
  continuousMonitoring: boolean;
  nistControls?: string[];
}> = {
  'cna-01': {
    evidenceRequirements: [
      {
        type: 'AWS Config Conformance Pack Report',
        collectionMethod: 'Automated - AWS Config',
        repository: 'S3://fedramp-evidence/config/network-security/',
        description: 'Operational Best Practices for Network Security'
      },
      {
        type: 'VPC Flow Logs Analysis',
        collectionMethod: 'Automated - CloudWatch Insights',
        repository: 'CloudWatch Logs Group: /aws/vpc/flowlogs',
        description: 'Weekly traffic pattern analysis showing deny actions'
      },
      {
        type: 'Network Diagram',
        collectionMethod: 'Manual - Architecture Documentation',
        repository: 'Confluence: FedRAMP/Network-Architecture',
        description: 'Current state network segmentation diagram'
      }
    ],
    successMetrics: [
      '100% of production resources have security groups configured',
      'Zero unauthorized inbound traffic in last 30 days',
      'VPC flow logs retention ≥ 90 days'
    ],
    continuousMonitoring: true,
    nistControls: ['SC-7', 'SC-7(5)', 'AC-4']
  },
  
  'cna-04': {
    evidenceRequirements: [
      {
        type: 'IaC Static Analysis Report',
        collectionMethod: 'Automated - CI/CD Pipeline',
        repository: 'S3://fedramp-evidence/iac-analysis/',
        description: 'Checkov/tfsec scan results from deployment pipeline'
      },
      {
        type: 'AWS Service Control Policies',
        collectionMethod: 'Automated - AWS Organizations',
        repository: 'AWS Organizations Console',
        description: 'SCPs preventing manual infrastructure changes'
      },
      {
        type: 'Infrastructure State Files',
        collectionMethod: 'Automated - Terraform Cloud',
        repository: 'Terraform Cloud Workspace: production',
        description: 'Versioned, encrypted state files with audit trail'
      }
    ],
    successMetrics: [
      '100% of infrastructure deployed via IaC',
      'Zero manual console changes in production',
      'All IaC commits pass security validation gates'
    ],
    continuousMonitoring: true,
    nistControls: ['CM-2', 'CM-2(2)', 'CM-3']
  },

  'svc-03': {
    evidenceRequirements: [
      {
        type: 'KMS Key Policies',
        collectionMethod: 'Automated - AWS Config',
        repository: 'S3://fedramp-evidence/encryption/kms-policies/',
        description: 'Key policies showing principal restrictions and rotation'
      },
      {
        type: 'Encryption Compliance Report',
        collectionMethod: 'Automated - AWS Config Rules',
        repository: 'AWS Config Dashboard',
        description: 'Rules: s3-bucket-encryption-enabled, rds-encryption-enabled'
      },
      {
        type: 'FIPS 140-2 Certificates',
        collectionMethod: 'Manual - Vendor Documentation',
        repository: 'GRC Vault: Encryption/FIPS-Certificates',
        description: 'Current FIPS validation certificates for all crypto modules'
      }
    ],
    successMetrics: [
      '100% of data stores encrypted at rest',
      'All encryption uses FIPS 140-2 validated modules',
      'Zero unencrypted backup locations'
    ],
    continuousMonitoring: true,
    nistControls: ['SC-28', 'SC-28(1)', 'SC-13']
  },

  'svc-06': {
    evidenceRequirements: [
      {
        type: 'Key Rotation Report',
        collectionMethod: 'Automated - AWS KMS',
        repository: 'CloudWatch Dashboard: KMS-Key-Age',
        description: 'Dashboard showing all key ages and last rotation dates'
      },
      {
        type: 'Certificate Automation Logs',
        collectionMethod: 'Automated - ACM/Let\'s Encrypt',
        repository: 'CloudWatch Logs: /aws/lambda/cert-rotation',
        description: 'Automated certificate renewal execution logs'
      },
      {
        type: 'Key Usage Audit Trail',
        collectionMethod: 'Automated - CloudTrail',
        repository: 'S3://fedramp-evidence/cloudtrail/kms-events/',
        description: 'All KMS API calls with principal and timestamp'
      }
    ],
    successMetrics: [
      'All keys rotated ≤ 365 days (or per NIST guidance)',
      '100% of certificates auto-renew before expiration',
      'Zero key rotation failures in last 12 months'
    ],
    continuousMonitoring: true,
    nistControls: ['SC-12', 'SC-12(2)', 'SC-12(3)']
  },

  'iam-01': {
    evidenceRequirements: [
      {
        type: 'MFA Enforcement Policy',
        collectionMethod: 'Automated - AWS IAM',
        repository: 'IAM Policy: RequireMFAPolicy',
        description: 'Policy denying all actions without MFA'
      },
      {
        type: 'FIDO2 Registration Report',
        collectionMethod: 'Manual - Identity Provider',
        repository: 'Okta/Auth0 Admin Dashboard',
        description: 'User report showing FIDO2/WebAuthn enrollment status'
      },
      {
        type: 'MFA Bypass Audit Log',
        collectionMethod: 'Automated - SIEM',
        repository: 'Splunk Dashboard: MFA-Exceptions',
        description: 'Any MFA bypass events with justification'
      }
    ],
    successMetrics: [
      '100% of human users have phishing-resistant MFA',
      'Zero SMS/voice-based MFA methods active',
      'MFA bypass rate < 0.1% with documented approval'
    ],
    continuousMonitoring: true,
    nistControls: ['IA-2(1)', 'IA-2(2)', 'IA-2(12)']
  },

  'iam-05': {
    evidenceRequirements: [
      {
        type: 'Zero Trust Architecture Diagram',
        collectionMethod: 'Manual - Architecture Documentation',
        repository: 'Confluence: Security/Zero-Trust-Design',
        description: 'Network diagram showing trust boundaries and verification points'
      },
      {
        type: 'Device Trust Policy',
        collectionMethod: 'Automated - MDM Solution',
        repository: 'Intune/Workspace ONE Console',
        description: 'Device compliance requirements and enforcement rules'
      },
      {
        type: 'Continuous Verification Logs',
        collectionMethod: 'Automated - SIEM',
        repository: 'Splunk Index: continuous_auth',
        description: 'Re-authentication events based on risk signals'
      }
    ],
    successMetrics: [
      'All access requests verified at every transaction',
      '100% of devices meet trust requirements before access',
      'Risk-based re-authentication triggered within 5 minutes of anomaly'
    ],
    continuousMonitoring: true,
    nistControls: ['AC-4', 'AC-6', 'IA-2']
  },

  'mla-01': {
    evidenceRequirements: [
      {
        type: 'SIEM Coverage Matrix',
        collectionMethod: 'Manual - Documentation',
        repository: 'GRC Vault: SIEM/Log-Source-Matrix',
        description: 'Mapping of all systems to log sources in SIEM'
      },
      {
        type: 'Log Immutability Configuration',
        collectionMethod: 'Automated - AWS S3',
        repository: 'S3://audit-logs-immutable/',
        description: 'S3 Object Lock configuration with legal hold'
      },
      {
        type: 'SIEM Health Dashboard',
        collectionMethod: 'Automated - SIEM',
        repository: 'Splunk Dashboard: SIEM-Health',
        description: 'Real-time status of all log sources and collection'
      }
    ],
    successMetrics: [
      'SIEM collects logs from >95% of in-scope systems',
      'Log retention meets FedRAMP requirements (≥1 year online, ≥3 years total)',
      'Zero gaps in log collection > 5 minutes'
    ],
    continuousMonitoring: true,
    nistControls: ['AU-2', 'AU-3', 'AU-4', 'AU-6']
  },

  'mla-03': {
    evidenceRequirements: [
      {
        type: 'Vulnerability Response SLA',
        collectionMethod: 'Manual - Policy Document',
        repository: 'GRC Vault: Policies/Vuln-Response-SLA',
        description: 'Documented SLAs by severity with escalation procedures'
      },
      {
        type: 'Automated Remediation Playbooks',
        collectionMethod: 'Automated - SOAR Platform',
        repository: 'Phantom/Cortex XSOAR Playbooks',
        description: 'Automated response workflows for common vulnerabilities'
      },
      {
        type: 'Remediation Metrics Dashboard',
        collectionMethod: 'Automated - Vulnerability Management',
        repository: 'Qualys/Tenable Dashboard: Remediation-KPIs',
        description: 'Mean time to remediation by severity level'
      }
    ],
    successMetrics: [
      'Critical vulnerabilities remediated within 24 hours',
      'High vulnerabilities remediated within 48 hours',
      '>80% of vulnerabilities auto-remediated without human intervention'
    ],
    continuousMonitoring: true,
    nistControls: ['RA-5', 'SI-2', 'SI-4']
  },

  'cmt-03': {
    evidenceRequirements: [
      {
        type: 'CI/CD Security Gates',
        collectionMethod: 'Automated - Pipeline',
        repository: 'GitHub Actions/Jenkins: .github/workflows/',
        description: 'Pipeline configuration showing security scan stages'
      },
      {
        type: 'Test Coverage Reports',
        collectionMethod: 'Automated - Testing Framework',
        repository: 'CodeCov/SonarQube Dashboard',
        description: 'Code coverage reports showing >80% coverage'
      },
      {
        type: 'Security Test Results',
        collectionMethod: 'Automated - SAST/DAST',
        repository: 'S3://fedramp-evidence/security-scans/',
        description: 'Fortify/Checkmarx scan results from each deployment'
      }
    ],
    successMetrics: [
      'All deployments pass automated security tests',
      'Code coverage maintained above 80%',
      'Zero high/critical findings reach production'
    ],
    continuousMonitoring: true,
    nistControls: ['SA-11', 'SA-11(1)', 'CA-2']
  },

  'rpl-03': {
    evidenceRequirements: [
      {
        type: 'Backup Configuration',
        collectionMethod: 'Automated - AWS Backup',
        repository: 'AWS Backup Console',
        description: 'Backup plans with cross-region replication'
      },
      {
        type: 'Immutable Backup Proof',
        collectionMethod: 'Automated - S3 Object Lock',
        repository: 'S3://backup-vault-immutable/',
        description: 'Object Lock configuration with compliance mode'
      },
      {
        type: 'Air-Gap Implementation',
        collectionMethod: 'Manual - Architecture Documentation',
        repository: 'Confluence: DR/Air-Gap-Design',
        description: 'Offline backup rotation procedures and evidence'
      }
    ],
    successMetrics: [
      '3-2-1 backup strategy fully implemented',
      'All backups encrypted with customer-managed keys',
      'Air-gapped copies updated weekly with chain of custody'
    ],
    continuousMonitoring: true,
    nistControls: ['CP-9', 'CP-9(1)', 'CP-9(3)']
  },

  'rpl-04': {
    evidenceRequirements: [
      {
        type: 'DR Test Results',
        collectionMethod: 'Manual - Test Documentation',
        repository: 'GRC Vault: DR-Tests/Q4-2024',
        description: 'Tabletop and full failover test results with RTO/RPO metrics'
      },
      {
        type: 'Chaos Engineering Reports',
        collectionMethod: 'Automated - Chaos Monkey/Gremlin',
        repository: 'S3://fedramp-evidence/chaos-tests/',
        description: 'Automated resilience test results'
      },
      {
        type: 'Lessons Learned Register',
        collectionMethod: 'Manual - Documentation',
        repository: 'Confluence: DR/Lessons-Learned',
        description: 'Post-incident reviews and improvement actions'
      }
    ],
    successMetrics: [
      'Quarterly DR tests meet documented RTO/RPO',
      'Chaos tests run weekly with <5% failure rate',
      '100% of lessons learned implemented within 30 days'
    ],
    continuousMonitoring: true,
    nistControls: ['CP-4', 'CP-4(1)', 'CP-4(2)']
  }
};