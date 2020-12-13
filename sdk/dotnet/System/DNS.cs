// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.System
{
    public partial class DNS : Pulumi.CustomResource
    {
        /// <summary>
        /// The DNS search domain
        /// </summary>
        [Output("domain")]
        public Output<string> Domain { get; private set; } = null!;

        /// <summary>
        /// The node name
        /// </summary>
        [Output("nodeName")]
        public Output<string> NodeName { get; private set; } = null!;

        /// <summary>
        /// The DNS servers
        /// </summary>
        [Output("servers")]
        public Output<ImmutableArray<string>> Servers { get; private set; } = null!;


        /// <summary>
        /// Create a DNS resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public DNS(string name, DNSArgs args, CustomResourceOptions? options = null)
            : base("proxmox:System/dNS:DNS", name, args ?? new DNSArgs(), MakeResourceOptions(options, ""))
        {
        }

        private DNS(string name, Input<string> id, DNSState? state = null, CustomResourceOptions? options = null)
            : base("proxmox:System/dNS:DNS", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing DNS resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static DNS Get(string name, Input<string> id, DNSState? state = null, CustomResourceOptions? options = null)
        {
            return new DNS(name, id, state, options);
        }
    }

    public sealed class DNSArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The DNS search domain
        /// </summary>
        [Input("domain", required: true)]
        public Input<string> Domain { get; set; } = null!;

        /// <summary>
        /// The node name
        /// </summary>
        [Input("nodeName", required: true)]
        public Input<string> NodeName { get; set; } = null!;

        [Input("servers")]
        private InputList<string>? _servers;

        /// <summary>
        /// The DNS servers
        /// </summary>
        public InputList<string> Servers
        {
            get => _servers ?? (_servers = new InputList<string>());
            set => _servers = value;
        }

        public DNSArgs()
        {
        }
    }

    public sealed class DNSState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The DNS search domain
        /// </summary>
        [Input("domain")]
        public Input<string>? Domain { get; set; }

        /// <summary>
        /// The node name
        /// </summary>
        [Input("nodeName")]
        public Input<string>? NodeName { get; set; }

        [Input("servers")]
        private InputList<string>? _servers;

        /// <summary>
        /// The DNS servers
        /// </summary>
        public InputList<string> Servers
        {
            get => _servers ?? (_servers = new InputList<string>());
            set => _servers = value;
        }

        public DNSState()
        {
        }
    }
}
