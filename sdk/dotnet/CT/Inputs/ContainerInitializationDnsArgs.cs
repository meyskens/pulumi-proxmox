// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.CT.Inputs
{

    public sealed class ContainerInitializationDnsArgs : Pulumi.ResourceArgs
    {
        [Input("domain")]
        public Input<string>? Domain { get; set; }

        [Input("server")]
        public Input<string>? Server { get; set; }

        public ContainerInitializationDnsArgs()
        {
        }
    }
}
