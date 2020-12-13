// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.Permission
{
    public partial class Group : Pulumi.CustomResource
    {
        /// <summary>
        /// The access control list
        /// </summary>
        [Output("acls")]
        public Output<ImmutableArray<Outputs.GroupAcl>> Acls { get; private set; } = null!;

        /// <summary>
        /// The group comment
        /// </summary>
        [Output("comment")]
        public Output<string?> Comment { get; private set; } = null!;

        /// <summary>
        /// The group id
        /// </summary>
        [Output("groupId")]
        public Output<string> GroupId { get; private set; } = null!;

        /// <summary>
        /// The group members
        /// </summary>
        [Output("members")]
        public Output<ImmutableArray<string>> Members { get; private set; } = null!;


        /// <summary>
        /// Create a Group resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Group(string name, GroupArgs args, CustomResourceOptions? options = null)
            : base("proxmox:Permission/group:Group", name, args ?? new GroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Group(string name, Input<string> id, GroupState? state = null, CustomResourceOptions? options = null)
            : base("proxmox:Permission/group:Group", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Group resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Group Get(string name, Input<string> id, GroupState? state = null, CustomResourceOptions? options = null)
        {
            return new Group(name, id, state, options);
        }
    }

    public sealed class GroupArgs : Pulumi.ResourceArgs
    {
        [Input("acls")]
        private InputList<Inputs.GroupAclArgs>? _acls;

        /// <summary>
        /// The access control list
        /// </summary>
        public InputList<Inputs.GroupAclArgs> Acls
        {
            get => _acls ?? (_acls = new InputList<Inputs.GroupAclArgs>());
            set => _acls = value;
        }

        /// <summary>
        /// The group comment
        /// </summary>
        [Input("comment")]
        public Input<string>? Comment { get; set; }

        /// <summary>
        /// The group id
        /// </summary>
        [Input("groupId", required: true)]
        public Input<string> GroupId { get; set; } = null!;

        public GroupArgs()
        {
        }
    }

    public sealed class GroupState : Pulumi.ResourceArgs
    {
        [Input("acls")]
        private InputList<Inputs.GroupAclGetArgs>? _acls;

        /// <summary>
        /// The access control list
        /// </summary>
        public InputList<Inputs.GroupAclGetArgs> Acls
        {
            get => _acls ?? (_acls = new InputList<Inputs.GroupAclGetArgs>());
            set => _acls = value;
        }

        /// <summary>
        /// The group comment
        /// </summary>
        [Input("comment")]
        public Input<string>? Comment { get; set; }

        /// <summary>
        /// The group id
        /// </summary>
        [Input("groupId")]
        public Input<string>? GroupId { get; set; }

        [Input("members")]
        private InputList<string>? _members;

        /// <summary>
        /// The group members
        /// </summary>
        public InputList<string> Members
        {
            get => _members ?? (_members = new InputList<string>());
            set => _members = value;
        }

        public GroupState()
        {
        }
    }
}
