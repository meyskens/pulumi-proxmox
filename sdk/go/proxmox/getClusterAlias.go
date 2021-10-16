// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package proxmox

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupClusterAlias(ctx *pulumi.Context, args *LookupClusterAliasArgs, opts ...pulumi.InvokeOption) (*LookupClusterAliasResult, error) {
	var rv LookupClusterAliasResult
	err := ctx.Invoke("proxmox:index/getClusterAlias:getClusterAlias", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getClusterAlias.
type LookupClusterAliasArgs struct {
	Name string `pulumi:"name"`
}

// A collection of values returned by getClusterAlias.
type LookupClusterAliasResult struct {
	Cidr    string `pulumi:"cidr"`
	Comment string `pulumi:"comment"`
	// The provider-assigned unique ID for this managed resource.
	Id   string `pulumi:"id"`
	Name string `pulumi:"name"`
}