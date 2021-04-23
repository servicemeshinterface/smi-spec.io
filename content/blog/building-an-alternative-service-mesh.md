---
title: "Building an Alternative Service Mesh: A Novel Approach Using the SMI Spec"
slug: "building-an-alternative-service-mesh"
authorname: "Kevin Crawley"
author: "@notsureifkevin"
authorlink: "https://twitter.com/notsureifkevin"
date: "2020-07-30T05:00:00-07:00"
---

In this post, I'll explore the high-level concepts that inform the [Service Mesh Interface (SMI) specification](https://github.com/servicemeshinterface/smi-spec/) by diving into the technical details behind the Maesh project, what makes the project unique among its peers, and their contributions to the SMI specification. In addition, I'll be covering the other partners in the ecosystem. For readers unfamiliar with the SMI, I'll briefly cover the history of the project and goals before diving into the technical bits.

## Introduction to the SMI Project

Microsoft announced the [SMI project](https://smi-spec.io/) to the world at KubeCon EU in May 2019. The project's goal is to define a set of API abstractions for widely adopted and everyday use cases. At the time of this writing, the interface covers [access control policies](https://github.com/servicemeshinterface/smi-spec/blob/v0.5.0/apis/traffic-access/traffic-access-WD.md), [metrics (telemetry)](https://github.com/servicemeshinterface/smi-spec/blob/v0.5.0/apis/traffic-metrics/traffic-metrics-WD.md), [traffic](https://github.com/servicemeshinterface/smi-spec/blob/v0.5.0/apis/traffic-specs/v1alpha3/traffic-specs.md), and [routing (traffic shifting)](https://github.com/servicemeshinterface/smi-spec/blob/v0.5.0/apis/traffic-split/traffic-split-WD.md). In April of 2020, Microsoft generously donated the project to the CNCF sandbox, providing a neutral home that benefits the community.

The [initial commit](https://github.com/servicemeshinterface/smi-spec/commit/f6f7a2dbc772db2ea9cf4763e0252a997a647afe) to the SMI specification, made by Brendan Burns of Microsoft in March 2019, eloquently establishes the project's intent: People should be able to use and define service mesh configurations without tightly binding to any specific implementation. The project's goal is to establish a standard set of specifications that cover the most widely used aspects of the service mesh. 

There is no mandate for organizations that adopt the SMI API to be constrained by the specification. Vendors may build extensions or capabilities beyond the scope of the SMI API. Adopters are encouraged to implement their use cases in a vendor-agnostic approach and evolve the SMI spec by contributing to the project. Although the project is still young, many organizations are currently doing just that, including [Containous](https://containo.us/) with the [Maesh](https://containo.us/maesh/) project.

## Who is Involved with the SMI spec?

The good news is that multiple providers are involved in implementing the SMI specification to varying degrees. To better understand these vendors and how they relate to the ecosystem, I'll briefly cover who they are and what problems they solve.

### Service Mesh Implementations

One class of software implements the SMI directly by consuming the APIs defined by the SMI group. Each implementation has its distinctive properties. Examples include:

*   Istio – uses [sidecars](https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar) running Envoy
*   Linkerd – uses a custom sidecar proxy implementation
*   Consul Connect – utilizes sidecar proxies such as Envoy and a built-in proxy for testing, also has support for user-defined proxies (HAproxy)
*   Maesh – uses a per-node (DaemonSet) proxy approach using a custom proxy implementation (Traefik)

### Management Planes

While these tools may not directly implement the functionality covered by the SMI, they play an essential role in the ecosystem by adopting and managing the technologies which support the SMI specification:

*   Weaveworks Flagger – functions as a control plane for Kubernetes deployment while supporting multiple service mesh implementations
*   Meshery – serves as a management plane for several Service Mesh implementations
*   RIO – serves as a management plane for Linkerd

## Introducing Maesh: a simpler service mesh

One novel implementation of the SMI specification is Maesh, which installs onto a Kubernetes cluster and implements multiple SMI APIs to support east-west communication between services running on the cluster. We had a unique vision of a service mesh that offered flexibility for adoption, lower performance overhead, and less-disruptive upgrades.

### A Fresh Approach

Implementing the SMI APIs made perfect sense as a starting point to the team building Maesh. The API's provided a clear consensus on features that had been widely adopted, thus ensuring the engineers didn't waste time addressing limited use cases. We were then able to focus on the vision that inspired the project, which cast aside some prior assumptions in the service mesh landscape.

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![maesh-arch-diagram](/img/blog/building-an-alternative-service-mesh/maesh-arch-diagram.png "sidecars … we don’t need no stinkin’ sidecars")

In the diagram above, notice how there is a distinct lack of sidecar proxies. This is by design, let's review.

### Diving into the Technical Deep End

Before we dive into the technical details in Maesh, and how we accomplished sidecar-less service mesh, it may be helpful for readers to catch up on a few components and configurations discussed in this section. 

*   [DNS stubbing](https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/#configuration-of-stub-domain-and-upstream-nameserver-using-coredns) – this capability is exposed by CoreDNS, the default DNS provider deployed in most Kubernetes distributions, which allows for the definition of private DNS zones, commonly referred to as “stub domains”
*   [`kube-dns`](https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/#introduction) – the CoreDNS component in Kubernetes responsible for resolving private (internal) DNS requests
*   [`kube-proxy`](https://kubernetes.io/docs/concepts/services-networking/service/#ips-and-vips) – operates on each Kubernetes node, responsible for load-balancing and proxying internal UDP, TCP, and SCTP packets for service-to-service communication

The team settled on an approach that involved patching CoreDNS with DNS stubs, so `kube-dns` would resolve Maesh-specific domain queries internally. Requests which matched the standard DNS schema in Kubernetes would continue routing through `kube-proxy`. In contrast, requests which matched the stubbed entries, `service-name.local.maesh`, would route via the Traefik proxies deployed by Maesh.

The controller deployed by Maesh handles the ingestion of SMI objects and configures each Traefik proxy node, which is deployed as a [DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/), allowing the individual pods to operate without any modification. This approach met all three of the original goals, without the need for sidecar proxies:

*   ensuring users could upgrade the service mesh without disruption
*   minimizing operational overhead
*   offering the flexibility to easily opt-in or out of the service mesh

## What’s Next

The Maesh project is currently adopting [mTLS](https://en.wikipedia.org/wiki/Mutual_authentication) for secure east-west communication but is also in the process of contributing the [UDP traffic type specification](https://github.com/servicemeshinterface/smi-spec/pull/151) to the SMI project. Containous is thrilled to be a part of this endeavor, and we look forward to seeing the innovations the other SMI partners are planning.

The [Maesh](https://github.com/containous/maesh) project is open-source and is always open to contributors. We are working on v1.4 which includes implementing some of the most recent exciting updates, such as the addition of [HTTP header routing](https://github.com/containous/maesh/issues/418) and [Traffic Splits](https://github.com/containous/maesh/issues/598) to the Traffic Specs. If you'd like to learn more about contributing, please let us know by introducing yourself to any of our open issues.

---

> Disclaimer: The author of this post is employed by Containous, the creators and maintainers of the Maesh project.

