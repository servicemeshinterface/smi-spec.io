---
title: "Service Mesh Interface Joins CNCF as a Sandbox Project"
slug: "smi-joins-cncf"
authorname: "Michelle Noorali & Bridget Kromhout"
author: "@SMI_spec"
authorlink: "https://twitter.com/SMI_spec"
date: "2020-04-09T05:00:00-07:00"
---

A service mesh is a dedicated infrastructure layer for handling service-to-service communication in a microservices environment. Service Mesh Interface (SMI) is a widely-adopted open specification that defines a set of APIs for the most common service mesh use cases (traffic policy, telemetry, and shifting) and enables interoperability of service meshes. The community has been growing rapidly since the SMI announcement at KubeCon EU in May 2019. We are pleased to announce that SMI is now a [CNCF Sandbox project](https://www.cncf.io/sandbox-projects/); we're excited to have a neutral home for our community collaboration.
<!--more-->
The service mesh landscape is growing rapidly, and organizations looking to adopt a service mesh can find the options available overwhelming. At the same time, it is still early days in the service mesh world. we're seeing new service mesh offerings popping up all over the place. Because each service mesh has its own set of APIs, it's also time consuming for developers to fully understand and test out the features of a given service mesh.

Happily, many service mesh providers have adopted SMI APIs for their offerings. This means developers can spend less time understanding a new API from the ground up and more time testing out capabilities they actually need. SMI adoption also enables the service mesh ecosystem to grow. This is a new but exciting space to keep tabs on. SMI gives developers who build tools, dashboards, and UIs on top of service meshes a single interface and set of APIs to build against. This allows everyone in the community to benefit from their work by allowing them to innovate in their own applications without being domain experts on multiple meshes.

We'd love to get more people involved in helping us evolve the spec; multiple interesting projects are in progress. The TrafficSplit API is used for traffic shifting, like when doing canary deployments. We recently added support for A/B testing scenarios within the TrafficSplit API via HTTP header matching. We are also making progress on the TrafficMetrics API to figure out how we can enable observability dashboards that are interested in supporting multiple service meshes. The multicluster and hybrid workload scenarios are also important to the community and we've been having great conversations on what a good interface and extension mechanisms are to handle those. If you're interested in these discussions, please join us [on GitHub](https://github.com/servicemeshinterface/smi-spec).

There are numerous opportunities to connect with the SMI community, and we would love your participation. SMI specification maintainers Lachlan Evenson, Thomas Rampelberg, and Stefan Prodan will be giving an introduction to SMI in a [CNCF webinar](https://zoom.us/webinar/register/2415861857194/WN_zm9Wky04TFCmeaNB3jJXCQ) on Friday April 10, 2020. We host a [community call on Zoom](https://zoom.us/my/cncfsmiproject) every other week, you can follow our [Twitter account](https://twitter.com/SMI_spec), and we keep in touch on the [#smi channel on the CNCF Slack](https://cloud-native.slack.com/messages/smi). Check out the [SMI website](https://smi-spec.io) for more details about the implementations, and see the [SMI GitHub organization](https://github.com/servicemeshinterface) for how you can get involved today.
