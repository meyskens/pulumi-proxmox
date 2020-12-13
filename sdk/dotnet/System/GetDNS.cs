// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.System
{
    public static class GetDNS
    {
        public static Task<GetDNSResult> InvokeAsync(GetDNSArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDNSResult>("proxmox:System/getDNS:getDNS", args ?? new GetDNSArgs(), options.WithVersion());
    }


    public sealed class GetDNSArgs : Pulumi.InvokeArgs
    {
        [Input("nodeName", required: true)]
        public string NodeName { get; set; } = null!;

        public GetDNSArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDNSResult
    {
        public readonly string Domain;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly string NodeName;
        public readonly ImmutableArray<string> Servers;

        [OutputConstructor]
        private GetDNSResult(
            string domain,

            string id,

            string nodeName,

            ImmutableArray<string> servers)
        {
            Domain = domain;
            Id = id;
            NodeName = nodeName;
            Servers = servers;
        }
    }
}
