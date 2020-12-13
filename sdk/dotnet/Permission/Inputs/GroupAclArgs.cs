// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.Permission.Inputs
{

    public sealed class GroupAclArgs : Pulumi.ResourceArgs
    {
        [Input("path", required: true)]
        public Input<string> Path { get; set; } = null!;

        [Input("propagate")]
        public Input<bool>? Propagate { get; set; }

        [Input("roleId", required: true)]
        public Input<string> RoleId { get; set; } = null!;

        public GroupAclArgs()
        {
        }
    }
}
