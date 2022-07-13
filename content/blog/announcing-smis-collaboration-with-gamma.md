---
title: "Announcing SMI's collaboration in the Gateway API GAMMA Initiative"
slug: "announcing-smi-gateway-api-gamma"
authorname: "Keith Mattix"
author: "@keithmattix"
authorlink: "https://twitter.com/keithmattix"
date: "2022-07-13T05:00:00-07:00"
---

In May 2019, Service Mesh Interface (SMI) [debuted on the KubeCon EU stage in Barcelona](https://www.youtube.com/watch?v=gDLD8gyd7J8), springing from a cross-ecosystem collaboration between Microsoft, Buoyant, HashiCorp, Solo.io, Kinvolk, and Weaveworks. We saw a need for a common set of consistent, flexible APIs, enabling the creation of tools that can work with service meshes while not being tightly coupled to any specific mesh implementation. The SMI community began as a trailblazing effort to work across the industry outside of the core Kubernetes project, with multiple vendors coordinating efforts on a specification outside of any singular implementation. This spec has been widely adopted, in whole and in part, by toolmakers who want to build on common APIs so they can focus on their specific value-adds.

SMI’s ambitious goal was nothing less than democratizing service mesh on Kubernetes. [Joining CNCF in 2020](https://smi-spec.io/blog/smi-joins-cncf/) furthered this goal, at a time when being a specification joining as a CNCF project opened many questions about the lack of an implementation. This choice was deliberate, as our goal was to open up the ecosystem for collaboration. Whether it be via direct implementations of the spec in the case of Linkerd or via adapter in the case of Istio and Consul Connect, SMI’s strength was most apparent in the conversations and shared understanding that came out of these collaborations.

As the Kubernetes ecosystem expands, we’re seeing this pattern evolve in projects such as [Cluster API Provider (CAPI)](https://cluster-api.sigs.k8s.io/) where we define a common framework from which to build out capabilities across clouds. Keeping specifications and code separate gives every provider the freedom to create their own implementation, a concept which dates back to early APIs in Kubernetes such as Ingress and Network Policy.

Where SMI allows for straightforward, consistent management of service-to-service traffic, the Gateway API project has achieved similar goals for ingress and egress use-cases. Significant overlap in the respective APIs has already inspired [discussion in the SMI community about possible integration](https://github.com/servicemeshinterface/smi-spec/issues/249). Guided by a common spirit of open, cross-industry collaboration, Gateway API is driving the reimagining of Kubernetes traffic routing via a robust, extensible set of resources configurable by the ingress controller and end-user alike.

The SMI project is happy to see that the [Gateway API specification has reached the beta milestone](https://kubernetes.io/blog/2022/07/13/gateway-api-graduates-to-beta/), and we are excited at the opportunity to collaborate side-by-side with our friends in the Gateway API community. Though SMI and Gateway API provide specifications for orthogonal traffic use-cases, we believe that the Kubernetes community will greatly benefit from a shared vision for advanced service-mesh based networking use-cases such as traffic splitting, [policy](https://gateway-api.sigs.k8s.io/geps/gep-713/), authorization/authentication, retries, and more.

To that end, members of the Istio, SMI, and SIG Network communities have come together to collaborate on mesh use cases in the Gateway API project, starting a new group for Gateway API Mesh Management and Administration — the [GAMMA Initiative](https://gateway-api.sigs.k8s.io/contributing/gamma/). Together, we will investigate, design, and track Gateway API resources, semantics, and other
artifacts related to service mesh technology and use-cases while seeking consistency between implementations of the Gateway API by service mesh projects.

Working within CNCF gives us the opportunity to build platforms that extend and integrate into Kubernetes. As these communities grow, we see additional opportunities to act as force multipliers. We’re excited to work together and for the entire cloud native community to enjoy the fruits of our collaboration.
