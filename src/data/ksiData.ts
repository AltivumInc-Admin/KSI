import { KSIData } from '../types/ksi';

export const ksiData: KSIData = {
  version: '25.05B',
  effectiveDate: 'June 1, 2025',
  impactLevel: 'Low',
  categories: [
    {
      id: 'cna',
      code: 'KSI-CNA',
      name: 'Cloud Native Architecture',
      objective: 'Leverage cloud-native design principles to enforce CIA (Confidentiality, Integrity, Availability)',
      items: [
        {
          id: 'cna-01',
          code: 'CNA-01',
          title: 'Configure ALL information resources to limit inbound/outbound traffic',
          checklist: [
            'Implement network segmentation',
            'Deploy WAF/firewall rules',
            'Configure security groups',
            'Enable VPC flow logs',
            'Document traffic policies'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'cna-02',
          code: 'CNA-02',
          title: 'Minimize attack surface and lateral movement',
          checklist: [
            'Implement least-privilege IAM',
            'Deploy micro-segmentation',
            'Use private subnets',
            'Disable unnecessary services',
            'Implement network isolation'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'cna-03',
          code: 'CNA-03',
          title: 'Use logical networking for traffic control',
          checklist: [
            'Configure VPC/VNet',
            'Implement network ACLs',
            'Deploy service mesh',
            'Configure route tables',
            'Enable network policies'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'cna-04',
          code: 'CNA-04',
          title: 'Implement immutable infrastructure',
          checklist: [
            'Use container images',
            'Implement IaC (Terraform/CloudFormation)',
            'Disable SSH/RDP by default',
            'Use blue-green deployments',
            'Version control all configs'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'cna-05',
          code: 'CNA-05',
          title: 'Deploy DDoS protection',
          checklist: [
            'Enable cloud DDoS service',
            'Configure rate limiting',
            'Implement auto-scaling',
            'Set up monitoring alerts',
            'Test DDoS response'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'cna-06',
          code: 'CNA-06',
          title: 'Design for HA and rapid recovery',
          checklist: [
            'Multi-AZ deployment',
            'Auto-scaling groups',
            'Load balancers configured',
            'Health checks enabled',
            'Failover tested'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'cna-07',
          code: 'CNA-07',
          title: 'Follow provider best practices',
          checklist: [
            'Review AWS/Azure/GCP guides',
            'Implement Well-Architected Framework',
            'Use native security services',
            'Document deviations',
            'Regular architecture reviews'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        }
      ]
    },
    {
      id: 'svc',
      code: 'KSI-SVC',
      name: 'Service Configuration',
      objective: 'Implement encryption, configuration management, and integrity verification',
      items: [
        {
          id: 'svc-01',
          code: 'SVC-01',
          title: 'Harden configurations',
          checklist: [
            'Apply CIS benchmarks',
            'Remove default accounts',
            'Disable unnecessary ports',
            'Configure security headers',
            'Document baselines'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'svc-02',
          code: 'SVC-02',
          title: 'Encrypt network traffic',
          checklist: [
            'TLS 1.2+ enforced',
            'Valid certificates deployed',
            'HTTPS redirect enabled',
            'VPN for admin access',
            'Encrypted service mesh'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'svc-03',
          code: 'SVC-03',
          title: 'Encrypt data at rest',
          checklist: [
            'Enable storage encryption',
            'Database encryption on',
            'Key management configured',
            'Backup encryption verified',
            'FIPS 140-2 compliance'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'svc-04',
          code: 'SVC-04',
          title: 'Centralize configuration',
          checklist: [
            'Deploy config mgmt tool',
            'GitOps implemented',
            'Environment variables secured',
            'Secrets management system',
            'Config drift detection'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'svc-05',
          code: 'SVC-05',
          title: 'Cryptographic integrity',
          checklist: [
            'Code signing enabled',
            'Image signing deployed',
            'Checksum verification',
            'Supply chain attestation',
            'Integrity monitoring'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'svc-06',
          code: 'SVC-06',
          title: 'Automated key management',
          checklist: [
            'KMS/HSM deployed',
            'Key rotation automated',
            'Certificate automation',
            'Key lifecycle documented',
            'Regular rotation verified'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'svc-07',
          code: 'SVC-07',
          title: 'Risk-based patching',
          checklist: [
            'Patch policy documented',
            'Automated scanning',
            'Patch testing process',
            'Emergency patch SLA',
            'Patch metrics tracked'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        }
      ]
    },
    {
      id: 'iam',
      code: 'KSI-IAM',
      name: 'Identity and Access Management',
      objective: 'Implement zero trust principles with strong authentication and authorization',
      items: [
        {
          id: 'iam-01',
          code: 'IAM-01',
          title: 'Phishing-resistant MFA',
          checklist: [
            'FIDO2/WebAuthn deployed',
            'Hardware tokens supported',
            'SMS/voice disabled',
            'MFA enforced globally',
            'Bypass procedures secure'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'iam-02',
          code: 'IAM-02',
          title: 'Passwordless/strong passwords',
          checklist: [
            'Passwordless preferred',
            '14+ char passwords',
            'Complexity requirements',
            'Password manager support',
            'No password reuse'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'iam-03',
          code: 'IAM-03',
          title: 'Secure service auth',
          checklist: [
            'Service accounts inventoried',
            'API keys rotated',
            'OAuth/OIDC implemented',
            'Workload identity used',
            'No hardcoded secrets'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'iam-04',
          code: 'IAM-04',
          title: 'Least privilege model',
          checklist: [
            'RBAC implemented',
            'JIT access configured',
            'Regular access reviews',
            'Privilege escalation logged',
            'No standing privileges'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'iam-05',
          code: 'IAM-05',
          title: 'Zero trust design',
          checklist: [
            'Never trust, always verify',
            'Micro-segmentation',
            'Context-aware access',
            'Continuous verification',
            'Device trust required'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'iam-06',
          code: 'IAM-06',
          title: 'Auto-disable suspicious accounts',
          checklist: [
            'Anomaly detection active',
            'Auto-disable rules set',
            'Alert escalation defined',
            'Recovery process tested',
            'Metrics tracked'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        }
      ]
    },
    {
      id: 'mla',
      code: 'KSI-MLA',
      name: 'Monitoring, Logging, and Auditing',
      objective: 'Comprehensive visibility into security events and rapid vulnerability response',
      items: [
        {
          id: 'mla-01',
          code: 'MLA-01',
          title: 'SIEM deployment',
          checklist: [
            'SIEM operational',
            'Log sources integrated',
            'Tamper protection enabled',
            'Retention policy set',
            'Correlation rules active'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'mla-02',
          code: 'MLA-02',
          title: 'Regular log review',
          checklist: [
            'Daily review process',
            'Automated alerting',
            'Anomaly detection',
            'Review metrics tracked',
            'Escalation procedures'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'mla-03',
          code: 'MLA-03',
          title: 'Rapid vuln response',
          checklist: [
            'Real-time scanning',
            'Automated remediation',
            'SLA defined (24-48h)',
            'Emergency response team',
            'Metrics dashboard'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'mla-04',
          code: 'MLA-04',
          title: 'Authenticated scanning',
          checklist: [
            'Scanner credentials configured',
            'Weekly scans scheduled',
            'Full coverage verified',
            'False positive process',
            'Scan reports archived'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'mla-05',
          code: 'MLA-05',
          title: 'IaC testing',
          checklist: [
            'Pre-commit hooks',
            'Policy as code',
            'CI/CD security gates',
            'Drift detection active',
            'Compliance scanning'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'mla-06',
          code: 'MLA-06',
          title: 'Vuln tracking system',
          checklist: [
            'Ticketing integrated',
            'Risk scoring automated',
            'Assignment workflow',
            'Aging reports',
            'Executive dashboard'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        }
      ]
    },
    {
      id: 'cmt',
      code: 'KSI-CMT',
      name: 'Configuration Management',
      objective: 'Controlled, auditable changes through automation and version control',
      items: [
        {
          id: 'cmt-01',
          code: 'CMT-01',
          title: 'Log system modifications',
          checklist: [
            'Change logging enabled',
            'Audit trail complete',
            'Real-time alerts',
            'Change attribution',
            'Immutable logs'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'cmt-02',
          code: 'CMT-02',
          title: 'Immutable redeployment',
          checklist: [
            'Blue-green deployment',
            'Canary releases',
            'Rollback capability',
            'No manual changes',
            'GitOps workflow'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'cmt-03',
          code: 'CMT-03',
          title: 'Automated testing',
          checklist: [
            'Unit tests required',
            'Integration tests',
            'Security tests',
            'Performance tests',
            'Test coverage >80%'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'cmt-04',
          code: 'CMT-04',
          title: 'Change management docs',
          checklist: [
            'Process documented',
            'Approval workflow',
            'Emergency changes',
            'CAB established',
            'Templates created'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'cmt-05',
          code: 'CMT-05',
          title: 'Risk assessment',
          checklist: [
            'Change risk matrix',
            'Impact analysis required',
            'Rollback plans',
            'Testing requirements',
            'Post-change review'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        }
      ]
    },
    {
      id: 'piy',
      code: 'KSI-PIY',
      name: 'Policy and Inventory',
      objective: 'Comprehensive documentation and governance of all security controls',
      items: [
        {
          id: 'piy-01',
          code: 'PIY-01',
          title: 'Asset inventory',
          checklist: [
            'Auto-discovery deployed',
            'CMDB maintained',
            'Software inventory',
            'Service catalog',
            'IaC as source of truth'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'piy-02',
          code: 'PIY-02',
          title: 'Security policies',
          checklist: [
            'Policy framework',
            'Control objectives',
            'Annual review cycle',
            'Exception process',
            'Employee acknowledgment'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'piy-03',
          code: 'PIY-03',
          title: 'Vulnerability disclosure',
          checklist: [
            'security.txt file',
            'Bug bounty program',
            'Response SLA',
            'Hall of fame',
            'Legal safe harbor'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'piy-04',
          code: 'PIY-04',
          title: 'Secure SDLC',
          checklist: [
            'Security requirements',
            'Threat modeling',
            'Code review process',
            'SAST/DAST tools',
            'Security champions'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'piy-05',
          code: 'PIY-05',
          title: 'Evaluation methods',
          checklist: [
            'Assessment procedures',
            'Testing methodology',
            'Validation criteria',
            'Evidence requirements',
            'Continuous validation'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'piy-06',
          code: 'PIY-06',
          title: 'Security organization',
          checklist: [
            'CISO appointed',
            'Security team staffed',
            'Budget allocated',
            'Board reporting',
            'KPIs defined'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'piy-07',
          code: 'PIY-07',
          title: 'Supply chain risk',
          checklist: [
            'SBOM generated',
            'Vendor assessment',
            'OSS policy',
            'License compliance',
            'Component tracking'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        }
      ]
    },
    {
      id: 'tpr',
      code: 'KSI-TPR',
      name: 'Third-Party Information Resources',
      objective: 'Manage and monitor supply chain risks from external dependencies',
      items: [
        {
          id: 'tpr-01',
          code: 'TPR-01',
          title: 'Identify third parties',
          checklist: [
            'Vendor inventory',
            'Service mapping',
            'Data flow diagrams',
            'API dependencies',
            'SaaS catalog'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'tpr-02',
          code: 'TPR-02',
          title: 'Verify FedRAMP status',
          checklist: [
            'Quarterly verification',
            'Authorization tracking',
            'Config reviews',
            'Marketplace limits',
            'Exception process'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'tpr-03',
          code: 'TPR-03',
          title: 'Supply chain risks',
          checklist: [
            'Risk register',
            'Vendor scoring',
            'Mitigation plans',
            'Concentration risk',
            'Alternative vendors'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'tpr-04',
          code: 'TPR-04',
          title: 'Vulnerability monitoring',
          checklist: [
            'CVE tracking',
            'Vendor notifications',
            'SCA tools deployed',
            'Patch SLAs defined',
            'Zero-day response'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        }
      ]
    },
    {
      id: 'ced',
      code: 'KSI-CED',
      name: 'Cybersecurity Education',
      objective: 'Build security-aware culture through comprehensive training programs',
      items: [
        {
          id: 'ced-01',
          code: 'CED-01',
          title: 'Security awareness',
          checklist: [
            'Annual training required',
            'Phishing simulations',
            'Completion tracking',
            'Updated content',
            'Effectiveness metrics'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'ced-02',
          code: 'CED-02',
          title: 'Role-specific training',
          checklist: [
            'Admin training program',
            'Developer security',
            'Incident responders',
            'Certification support',
            'Skills assessment'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        }
      ]
    },
    {
      id: 'rpl',
      code: 'KSI-RPL',
      name: 'Recovery Planning',
      objective: 'Ensure rapid recovery from incidents with minimal data loss',
      items: [
        {
          id: 'rpl-01',
          code: 'RPL-01',
          title: 'Define RTO/RPO',
          checklist: [
            'Business impact analysis',
            'RTO documented',
            'RPO documented',
            'Tier classification',
            'Stakeholder approval'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'rpl-02',
          code: 'RPL-02',
          title: 'Recovery plan',
          checklist: [
            'DR plan documented',
            'Runbooks created',
            'Contact lists current',
            'Alternate sites',
            'Communication plan'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'rpl-03',
          code: 'RPL-03',
          title: 'Backup implementation',
          checklist: [
            'Automated backups',
            '3-2-1 strategy',
            'Encryption verified',
            'Retention policy',
            'Air-gapped copies'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'rpl-04',
          code: 'RPL-04',
          title: 'Recovery testing',
          checklist: [
            'Quarterly DR tests',
            'Tabletop exercises',
            'Full failover test',
            'Lessons learned',
            'Metrics tracked'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        }
      ]
    },
    {
      id: 'inr',
      code: 'KSI-INR',
      name: 'Incident Reporting',
      objective: 'Comprehensive incident documentation and continuous improvement',
      items: [
        {
          id: 'inr-01',
          code: 'INR-01',
          title: 'FedRAMP reporting',
          checklist: [
            '1-hour notification',
            'Reporting procedures',
            'Templates ready',
            'Contact info current',
            'Escalation matrix'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'inr-02',
          code: 'INR-02',
          title: 'Incident logging',
          checklist: [
            'Incident database',
            'Categorization scheme',
            'Trend analysis',
            'Monthly reviews',
            'Pattern detection'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        },
        {
          id: 'inr-03',
          code: 'INR-03',
          title: 'Lessons learned',
          checklist: [
            'AAR process',
            'Root cause analysis',
            'Action items tracked',
            'Process improvements',
            'Knowledge base'
          ],
          status: 'not_started',
          evidence: '',
          completedItems: [false, false, false, false, false]
        }
      ]
    }
  ]
};