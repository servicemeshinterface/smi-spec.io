---
title: "Validating SMI Conformance with Meshery"
slug: "validating-smi-conformance-with-meshery"
authorname: "Lee Calcote"
author: "@lcalcote"
authorlink: "https://twitter.com/lcalcote"
date: "2021-04-23T05:00:00-07:00"
---
With the increasing adoption of Service Mesh Interface by what is a vibrant and diverse community of both service mesh providers and ecosystem integrators, the need for verification and validation of SMI implementations is clear. We're still counting, however, as of this writing SMI has been adopted by more than 10 of the available service meshes and ecosystem tools. As you can see on the [service mesh landscape](https://layer5.io/service-mesh-landscape), the last few significant, new service mesh project / product announcements have proclaimed SMI compatibility from the start. Validating consistency of these implementations is key to upholding the value of SMI itself.

From my time spent creating the v1.0 versions of other specifications like Redfish, Docker Benchmark, CloudEvents, and others, I can tell you that the promise of consistency lies at the heart of any specification. [SMI's specifications](https://github.com/servicemeshinterface/smi-spec) and their implementations are no different in this regard. Consistency enables portability and choice. Consistency enables great user experiences. Service Mesh Interface specifications present a consistent set of abstractions to describe functional service mesh configuration in a common way. SMI makes integrations with participating service meshes portable. In order to better serve these goals, the SMI community and Layer5 have developed an SMI Conformance initiative.

## Conforming to SMI

![SMI Conformance Program Overview](/img/blog/validating-smi-conformance-with-meshery/smi-comformance-initiative-overview.png)

The scope of the [SMI Conformance](https://layer5.io/projects/service-mesh-interface-conformance) initiative includes all service mesh projects participating in the Service Mesh Interface specification. The goal of this initiative is to provide open tooling for validation of SMI specifications, instilling user confidence in the SMI implementation of their chosen service mesh. This validation initiative is not a full-blown certification program, yet, but has all of the makings to become one:

- Versioned suite of conformance tests.
- Self-reporting with guaranteed provenance and integrity of conformance test results.
- Continually published conformance results.
- Support for all service meshes that implement SMI.

Delivering on these requirements required a tool specifically suited to SMI. 

## SMI Conformance Tool: Meshery

Meshery, the service mesh management plane, is service mesh agnostic, which is an important characteristic as a compliance tool. No better tool for the job (in fact, no other tool capable of the job) than Meshery, which has been [a partner of SMI](https://meshery.io/blog/a-standard-interface-for-service-meshes) since its SMI’s inception. 
![SMI Conformance Tool]( /img/blog/validating-smi-conformance-with-meshery/meshery-service-mesh-compliance-tool.png). Meshery is ideal tooling in that it provides lifecycle management of a large number of service meshes and sample applications which need to be provisioned, tested, and deprovisioned in the process of validating conformance. And that Meshery is capable of generating load and verifying test assertions. Meshery will be extended to validate any service mesh that claims to implement and conform SMI specifications. And, more broadly, to leverage the same tooling to validate service mesh standards at-large, including SMI and [Service Mesh Performance](https://smp-spec.io) (SMP). 

## Validating Conformance

__how smi conformance works...__
__incomplete__

Just like SMI itself, the conformance program is a living thing. The suite of [SMI Conformance tests](https://layer5.io/projects/service-mesh-interface-conformance) is versioned, and with each new version of SMI, as interfaces added and specifications changed, the Conformance requirements will change as appropriate. The SMI community is the change controller and overseers of what it means to conform to SMI. Work on the mechanics of the conformance tests occurs in the [CNCF Service Mesh WG](https://github.com/cncf/sig-network/tree/master/service-mesh-wg) develops the process and policy around the conformance program.

## Validate Your Service Mesh's Conformance

All SMI implementers are invited to submit conformance testing results for review and publication by the SMI project. Use Meshery's diagnostic tool to verify that your service mesh's behavior in an accessible and non-destructive manner. 

See current [conformance test results](https://meshery.io/service-mesh-interface) and the [full list of conformance tests](https://layer5.io/projects/service-mesh-interface-conformance).

The SMI Conformance program gives end users the confidence that when they use a validated SMI project or product that they can rely on common functionality and high level behavior. The program gives Independent Software Vendors (ISVs) confidence that if their customer is using a service mesh with validated SMI implementation that their software will behave as expected.
